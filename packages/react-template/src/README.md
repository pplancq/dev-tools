# `src`

This directory contains the template source code and its explanatory documentation.

## Architecture Philosophy

This starter follows a **hybrid architecture** combining two complementary patterns:

- **Clean Architecture** (Robert C. Martin) — code is organized into horizontal layers that enforce a strict
  dependency direction. Dependencies always flow **inward toward the domain**. The domain is the most protected
  layer; it has zero external dependencies.
- **DDD Bounded Contexts** — code is also organized into vertical slices, each representing an isolated business
  domain. A bounded context owns its full stack: domain, application, infrastructure, and UI.

The result is a structure where every folder belongs to either a **horizontal layer** (domain, application,
infrastructure, ui) or a **vertical slice** (a bounded context such as `demo`), and both dimensions are always
visible.

## Top-level structure

```
src/
├── app/       # Application bootstrap layer (not a bounded context)
├── shared/    # Shared kernel — genuinely cross-context code
│   ├── domain/
│   ├── application/
│   ├── infrastructure/
│   └── ui/
└── demo/      # Example bounded context (domain / application / infrastructure / ui)
```

## Fundamental dependency rule

```
UI  →  Application  →  Domain
Infrastructure  -.→  Domain (implements its interfaces)
```

- **Domain** depends on nothing. Pure TypeScript.
- **Application** depends on Domain only. Orchestrates use cases, defines infrastructure interfaces.
- **Infrastructure** implements interfaces defined by Domain/Application. May use external libraries.
- **UI** depends on Application (use cases) and Domain (DTOs). No business logic.

This rule applies **within each bounded context** and **within the shared kernel**.

## Path aliases

Each first-class section of the source tree has a TypeScript path alias. Use these aliases instead of long
relative paths; they signal architectural intent and prevent accidental cross-context coupling.

| Alias       | Maps to        |
| ----------- | -------------- |
| `@App/*`    | `src/app/*`    |
| `@Shared/*` | `src/shared/*` |
| `@Demo/*`   | `src/demo/*`   |
| `@Mocks/*`  | `mocks/*`      |

When you add a real bounded context alongside `demo`, add its own alias to `tsconfig.json`.

## Table of contents

1. [`app/README.md`](./app/README.md) — application bootstrap, composition root, routing, and providers
2. [`shared/README.md`](./shared/README.md) — shared kernel concept and usage rules
3. [`shared/domain/README.md`](./shared/domain/README.md) — shared pure contracts, types, and domain rules
4. [`shared/application/README.md`](./shared/application/README.md) — shared application-layer abstractions
5. [`shared/infrastructure/README.md`](./shared/infrastructure/README.md) — shared technical adapters and helpers
6. [`shared/ui/README.md`](./shared/ui/README.md) — shared UI-facing hooks and utilities
7. [`demo/README.md`](./demo/README.md) — the example bounded context and how to replicate it

## Suggested reading order

If you are discovering the template for the first time:

1. This file — understand the big picture
2. `app` — see how the application boots and wires everything together
3. `shared/domain` — understand why the domain layer is the most protected
4. `shared` — understand what the shared kernel is and what it must not become
5. `demo` — walk through a complete bounded context layer by layer

That sequence starts with the overall architecture, moves to the heart of Clean Architecture (domain purity),
then shows how a real bounded context puts all the pieces together.
