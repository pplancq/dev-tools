# @pplancq/nx-release-plugin

Nx plugin that scaffolds and maintains a shared [Nx release](https://nx.dev/features/manage-releases) configuration for pplancq repositories.

## Installation

```bash
npm install -D @pplancq/nx-release-plugin
```

## Usage

### Setup on an existing repository

Run the setup generator to create or update `nx.json`:

```bash
nx g @pplancq/nx-release-plugin:setup
```

It will ask for:

- the release preset (`simple`, `monorepo-fixed` or `monorepo-independent`)
- the project glob pattern(s)

You can also pass options directly:

```bash
nx g @pplancq/nx-release-plugin:setup \
  --preset=monorepo-independent \
  --projects=packages/*,apps/*
```

The generator deep-merges the chosen preset with your existing `nx.json`, so only the `release` section is touched.

### Available presets

| Preset                                                    | Description                                                         |
| --------------------------------------------------------- | ------------------------------------------------------------------- |
| `@pplancq/nx-release-plugin/presets/simple`               | Single package at the repository root.                              |
| `@pplancq/nx-release-plugin/presets/monorepo-fixed`       | Monorepo with a single synchronized release and a shared changelog. |
| `@pplancq/nx-release-plugin/presets/monorepo-independent` | Monorepo where each package is released independently.              |

### Updating the configuration

When a new version of the plugin changes the default release configuration, run the migrations:

```bash
nx migrate @pplancq/nx-release-plugin
nx migrate --run-migrations
```

### Preset defaults

- **Analytics are disabled** (`"analytics": false`) so no usage telemetry is sent to Nx.
- **Independent releases rely on commit scope** (`"conventionalCommits.useCommitScope": true`). Version bumps are attributed to projects based on the commit message scope. Commits without a matching project scope (such as Renovate's `deps` scope) are treated as indirect changes and capped at a patch bump. This avoids bogus major releases caused by upstream breaking-change notes in dependency update bodies.
- **Independent releases use project-scoped tags** (`"releaseTag.pattern": "{projectName}@{version}"`).

## Conventional commits

The following commit types are configured:

| Type                     | Semver bump | Changelog section           |
| ------------------------ | ----------- | --------------------------- |
| `feat`                   | `minor`     | 🎉 Features                 |
| `fix`                    | `patch`     | 🐞 Bug Fixes                |
| `perf`                   | `patch`     | 🚀 Performance Improvements |
| `revert`                 | `patch`     | ⏪ Reverts                  |
| `docs`                   | `none`      | 📚 Documentation            |
| `refactor`               | `none`      | ♻️ Code Refactoring         |
| `build`                  | `none`      | 🏗️ Build System             |
| `ci`                     | `none`      | 👷 CI                       |
| `style`, `test`, `chore` | `none`      | hidden                      |

### Dependency updates

Commits with the `deps` scope are grouped under a dedicated **📦 Dependencies** section in the changelog, regardless of their type.

## Requirements

- Node.js `>=22.12.0`
- Nx `>=23.0.0`
