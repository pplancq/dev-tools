const gitAssets = [
  'package.json',
  'package-lock.json',
  'CHANGELOG.md',
  ...(process.env.GIT_ASSETS ?? '').split(','),
].filter(Boolean);

const disabledSuccessComment = (process.env.GITHUB_DISABLED_SUCCESS_COMMENT ?? 'false') === 'true';
const disabledReleasedLabels = (process.env.GITHUB_DISABLED_RELEASED_LABELS ?? 'false') === 'true';

const githubOptions = {};
if (disabledSuccessComment) {
  githubOptions.successComment = false;
}
if (disabledReleasedLabels) {
  githubOptions.releasedLabels = false;
}

/** @type {import('semantic-release').GlobalConfig} */
const config = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'conventionalcommits',
        releaseRules: [
          { breaking: true, release: 'major' },
          { type: 'feat', release: 'minor' },
          { type: 'fix', release: 'patch' },
          { type: 'chore', release: 'patch' },
          { type: 'docs', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'refactor', release: 'patch' },
          { type: 'perf', release: 'patch' },
          { type: 'test', release: 'patch' },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
        writerOpts: {
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: gitAssets,
        // eslint-disable-next-line no-template-curly-in-string
        message: 'chore(release): ${nextRelease.name} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    [
      '@semantic-release/github',
      {
        ...githubOptions,
      },
    ],
  ],
};

module.exports = config;
