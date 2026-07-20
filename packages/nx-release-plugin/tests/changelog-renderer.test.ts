import CustomChangelogRenderer from '@/changelog-renderer';
import type { ChangelogChange } from 'nx/release/changelog-renderer';
import { describe, expect, it, vi } from 'vitest';

const createRemoteReleaseClient = () =>
  ({
    getRemoteRepoData: vi.fn(() => ({ repo: 'pplancq/dev-tools' })),
    formatReferences: vi.fn((references: NonNullable<ChangelogChange['githubReferences']>) =>
      references.map(reference => `#${reference.value}`).join(' '),
    ),
    applyUsernameToAuthors: vi.fn(),
    remoteReleaseProviderName: 'GitHub' as const,
  }) as unknown as CustomChangelogRendererConfig['remoteReleaseClient'];

type CustomChangelogRendererConfig = ConstructorParameters<typeof CustomChangelogRenderer>[0];

const createRenderer = (overrides: Partial<CustomChangelogRendererConfig> = {}) => {
  const remoteReleaseClient = createRemoteReleaseClient();
  const renderer = new CustomChangelogRenderer({
    changes: [],
    changelogEntryVersion: '1.2.3',
    project: null,
    entryWhenNoChanges: false,
    isVersionPlans: false,
    changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
    conventionalCommitsConfig: { useCommitScope: false, types: {} },
    remoteReleaseClient,
    ...overrides,
  });

  return { renderer, remoteReleaseClient };
};

class TestableRenderer extends CustomChangelogRenderer {
  public testFormatChange(change: ChangelogChange) {
    return this.formatChange(change);
  }

  public testFormatBreakingChange(change: ChangelogChange) {
    return this.formatBreakingChange(change);
  }
}

const createTestableRenderer = (overrides: Partial<CustomChangelogRendererConfig> = {}) => {
  const remoteReleaseClient = createRemoteReleaseClient();
  const renderer = new TestableRenderer({
    changes: [],
    changelogEntryVersion: '1.2.3',
    project: null,
    entryWhenNoChanges: false,
    isVersionPlans: false,
    changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
    conventionalCommitsConfig: { useCommitScope: false, types: {} },
    remoteReleaseClient,
    ...overrides,
  });

  return { renderer, remoteReleaseClient };
};

const baseChange = (overrides: Partial<ChangelogChange> = {}): ChangelogChange => ({
  type: 'feat',
  scope: '',
  description: 'add new feature',
  body: '',
  shortHash: 'abc1234',
  affectedProjects: '*',
  authors: [{ name: 'John Doe', email: 'john@example.com' }],
  ...overrides,
});

describe('CustomChangelogRenderer', () => {
  describe('render', () => {
    it('should return an empty string when there are no changes and no entry configured', async () => {
      const { renderer } = createRenderer();

      const result = await renderer.render();

      expect(result).toStrictEqual('');
    });

    it('should render the empty entry message when no changes exist and it is configured', async () => {
      const { renderer } = createRenderer({
        changelogEntryVersion: '1.0.0',
        entryWhenNoChanges: 'No notable changes.',
      });

      const result = await renderer.render();

      expect(result).toStrictEqual('# 1.0.0\n\nNo notable changes.');
    });

    it('should render the version title and changes grouped by type', async () => {
      const { renderer } = createRenderer({
        changes: [
          baseChange({ type: 'feat', description: 'add feature A' }),
          baseChange({ type: 'fix', description: 'fix bug B' }),
        ],
        conventionalCommitsConfig: {
          useCommitScope: false,
          types: {
            feat: { changelog: { title: 'Features' } },
            fix: { changelog: { title: 'Bug Fixes' } },
          },
        },
      });

      const result = await renderer.render();

      expect(result).toContain('## 1.2.3');
      expect(result).toContain('### Features');
      expect(result).toContain('- add feature A');
      expect(result).toContain('### Bug Fixes');
      expect(result).toContain('- fix bug B');
    });

    it('should group dependency scoped changes under a dedicated section', async () => {
      const { renderer, remoteReleaseClient } = createRenderer({
        changes: [
          baseChange({ type: 'feat', description: 'add feature A' }),
          baseChange({ type: 'feat', scope: 'deps', description: 'bump dependency A' }),
          baseChange({ type: 'fix', scope: 'deps', description: 'patch dependency B' }),
        ],
        conventionalCommitsConfig: {
          useCommitScope: false,
          types: {
            feat: { changelog: { title: 'Features' } },
            fix: { changelog: { title: 'Bug Fixes' } },
          },
        },
      });

      const result = await renderer.render();
      const [featuresSection, dependenciesSection] = result.split('### 📦 Dependencies');

      expect(featuresSection).toContain('### Features');
      expect(featuresSection).toContain('- add feature A');
      expect(featuresSection).not.toContain('**deps:**');
      expect(dependenciesSection).toContain('- **deps:** bump dependency A');
      expect(dependenciesSection).toContain('- **deps:** patch dependency B');
      expect(remoteReleaseClient.formatReferences).not.toHaveBeenCalled();
    });

    it('should render dependency bumps in the dependencies section', async () => {
      const { renderer } = createRenderer({
        dependencyBumps: [
          { dependencyName: 'nx', newVersion: '20.0.0' },
          { dependencyName: 'typescript', newVersion: '5.6.0' },
        ],
      });

      const result = await renderer.render();

      expect(result).toContain('## 1.2.3');
      expect(result).toContain('### 📦 Dependencies');
      expect(result).toContain('- Updated nx to 20.0.0');
      expect(result).toContain('- Updated typescript to 5.6.0');
    });

    it('should render breaking changes', async () => {
      const { renderer } = createRenderer({
        changes: [baseChange({ type: 'feat', isBreaking: true, description: 'change behavior' })],
        conventionalCommitsConfig: {
          useCommitScope: false,
          types: { feat: { changelog: { title: 'Features' } } },
        },
      });

      const result = await renderer.render();

      expect(result).toContain('### ⚠️  Breaking Changes');
      expect(result).toContain('- ⚠️  change behavior');
    });

    it('should render the authors section when enabled', async () => {
      const { renderer } = createRenderer({
        changes: [baseChange({ type: 'feat', description: 'add feature' })],
        changelogRenderOptions: { authors: true, commitReferences: true, versionTitleDate: false },
        conventionalCommitsConfig: {
          useCommitScope: false,
          types: { feat: { changelog: { title: 'Features' } } },
        },
      });

      const result = await renderer.render();

      expect(result).toContain('### ❤️ Thank You');
      expect(result).toContain('- John Doe');
    });
  });

  describe('formatChange', () => {
    it('should strip issue references from dependency scoped changes', () => {
      const { renderer, remoteReleaseClient } = createTestableRenderer({
        changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
      });
      const change = baseChange({
        scope: 'deps',
        description: 'bump package',
        githubReferences: [
          { type: 'issue', value: '42' },
          { type: 'pull-request', value: '43' },
        ],
      });

      renderer.testFormatChange(change);

      expect(remoteReleaseClient.formatReferences).toHaveBeenCalledWith([{ type: 'pull-request', value: '43' }]);
    });

    it('should keep issue references for non dependency scoped changes', () => {
      const { renderer, remoteReleaseClient } = createTestableRenderer({
        changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
      });
      const change = baseChange({
        scope: 'core',
        description: 'fix issue',
        githubReferences: [
          { type: 'issue', value: '42' },
          { type: 'pull-request', value: '43' },
        ],
      });

      renderer.testFormatChange(change);

      expect(remoteReleaseClient.formatReferences).toHaveBeenCalledWith([
        { type: 'issue', value: '42' },
        { type: 'pull-request', value: '43' },
      ]);
    });
  });

  describe('formatBreakingChange', () => {
    it('should strip issue references from dependency scoped breaking changes', () => {
      const { renderer, remoteReleaseClient } = createTestableRenderer({
        changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
      });
      const change = baseChange({
        scope: 'deps',
        description: 'drop old api',
        body: 'BREAKING CHANGE: remove v1 support',
        githubReferences: [{ type: 'issue', value: '99' }],
      });

      renderer.testFormatBreakingChange(change);

      expect(remoteReleaseClient.formatReferences).toHaveBeenCalledWith([]);
    });

    it('should keep issue references for non dependency scoped breaking changes', () => {
      const { renderer, remoteReleaseClient } = createTestableRenderer({
        changelogRenderOptions: { authors: false, commitReferences: true, versionTitleDate: false },
      });
      const change = baseChange({
        scope: 'core',
        description: 'drop old api',
        body: 'BREAKING CHANGE: remove v1 support',
        githubReferences: [{ type: 'issue', value: '99' }],
      });

      renderer.testFormatBreakingChange(change);

      expect(remoteReleaseClient.formatReferences).toHaveBeenCalledWith([{ type: 'issue', value: '99' }]);
    });
  });
});
