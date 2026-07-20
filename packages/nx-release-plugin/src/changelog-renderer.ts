import DefaultChangelogRenderer from 'nx/release/changelog-renderer';
import type { ChangelogChange } from 'nx/release/changelog-renderer';

const DEPENDENCY_SCOPE = 'deps';

// eslint-disable-next-line import/no-default-export
export default class CustomChangelogRenderer extends DefaultChangelogRenderer {
  private dependencyChangesLines: string[] = [];

  async render(): Promise<string> {
    const sections: string[][] = [];
    this.preprocessChanges();

    if (this.shouldRenderEmptyEntry()) {
      return this.renderEmptyEntry();
    }

    sections.push([this.renderVersionTitle()]);

    const changesByType = this.renderChangesByType();
    if (changesByType.length > 0) {
      sections.push(changesByType);
    }

    if (this.hasBreakingChanges()) {
      sections.push(this.renderBreakingChanges());
    }

    if (this.hasDependencyBumps() || this.dependencyChangesLines.length > 0) {
      sections.push(this.renderMergedDependenciesSection());
    }

    if (this.shouldRenderAuthors()) {
      sections.push(await this.renderAuthors());
    }

    return sections
      .filter(section => section.length > 0)
      .map(section => section.join('\n').trim())
      .join('\n\n')
      .trim();
  }

  protected renderChangesByType(): string[] {
    const dependencyChanges = this.relevantChanges.filter(change => change.scope?.trim() === DEPENDENCY_SCOPE);
    const otherChanges = this.relevantChanges.filter(change => change.scope?.trim() !== DEPENDENCY_SCOPE);

    const originalRelevantChanges = this.relevantChanges;
    this.relevantChanges = otherChanges;

    try {
      const markdownLines = super.renderChangesByType();

      if (dependencyChanges.length > 0) {
        const dependencyChangesByType = CustomChangelogRenderer.groupChangesByTypeFor(dependencyChanges);
        const changeTypes = this.conventionalCommitsConfig?.types ?? {};

        const dependencyChangesToLog = Object.entries(dependencyChangesByType)
          .filter(([type, group]) => changeTypes[type] && group.length > 0)
          .flatMap(([, group]) => group);

        this.dependencyChangesLines = dependencyChangesToLog.map(change => this.formatChange(change));
      }

      return markdownLines;
    } finally {
      this.relevantChanges = originalRelevantChanges;
    }
  }

  protected formatChange(change: ChangelogChange): string {
    if (change.scope?.trim() === DEPENDENCY_SCOPE) {
      return super.formatChange(this.withoutIssueReferences(change));
    }

    return super.formatChange(change);
  }

  protected formatBreakingChange(change: ChangelogChange): string {
    if (change.scope?.trim() === DEPENDENCY_SCOPE) {
      return super.formatBreakingChange(this.withoutIssueReferences(change));
    }

    return super.formatBreakingChange(change);
  }

  private renderMergedDependenciesSection(): string[] {
    const markdownLines: string[] = ['', '### 📦 Dependencies', ''];

    if (this.hasDependencyBumps()) {
      this.dependencyBumps?.forEach(({ dependencyName, newVersion }) => {
        markdownLines.push(`- Updated ${dependencyName} to ${newVersion}`);
      });
    }

    if (this.dependencyChangesLines.length > 0) {
      markdownLines.push(...this.dependencyChangesLines);
    }

    return markdownLines;
  }

  // eslint-disable-next-line class-methods-use-this
  private withoutIssueReferences(change: ChangelogChange): ChangelogChange {
    const githubReferences = change.githubReferences?.filter(reference => reference.type !== 'issue');
    return { ...change, githubReferences };
  }

  private static groupChangesByTypeFor(changes: ChangelogChange[]): Record<string, ChangelogChange[]> {
    const typeGroups: Record<string, ChangelogChange[]> = {};

    changes.forEach(change => {
      const group = typeGroups[change.type] ?? [];
      group.push(change);
      typeGroups[change.type] = group;
    });

    return typeGroups;
  }
}
