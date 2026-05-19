# `shared/domain`

The `shared/domain` folder contains the **innermost layer** of the shared kernel — the most protected, most
stable, and most dependency-free part of the codebase.

## What the domain layer represents

In Clean Architecture, the **domain layer** is the heart of the application. It captures the business rules and
invariants that would still be true even if you replaced the database, the HTTP client, or the UI framework.

In DDD terms, the domain layer hosts:

- **Entities** — objects with a stable identity that persists across state changes (e.g., `User`, `Order`).
- **Value Objects** — immutable objects defined entirely by their attributes, with no identity (e.g., `Email`,
  `Money`, `DateRange`). Two value objects with the same attributes are equal.
- **Domain Services** — stateless operations that belong to the domain but do not fit naturally on a single
  entity.
- **Repository Interfaces** — contracts that define _what_ data access operations exist, without specifying
  _how_ they are implemented. The concrete implementation lives in `infrastructure`.
- **Domain Errors** — typed, domain-meaningful error cases.

## Absolute constraints

This layer must have **zero external dependencies**:

| Forbidden              | Why                                             |
| ---------------------- | ----------------------------------------------- |
| React / JSX            | Domain must not know how it is rendered         |
| Inversify / decorators | DI is an infrastructure concern                 |
| HTTP / fetch / axios   | I/O belongs to infrastructure                   |
| Browser APIs           | Domain must run anywhere (browser, Node, tests) |
| External NPM packages  | Brings in coupling and upgrade risk             |

Only plain TypeScript (interfaces, types, classes, functions, constants) belongs here.

## Difference between `shared/domain` and a context's own domain

`shared/domain` is the shared kernel's domain — only types or interfaces that are **genuinely used by more
than one bounded context**. If a domain concept belongs only to `demo`, it lives in `demo/domain`.

## What you can put here

- Shared pure interfaces and type aliases
- Value-object-like primitives reused across contexts
- Shared domain error types
- Repository interface contracts shared by multiple contexts (rare)

## What you should not put here

- Anything with an `import` statement that references React, Inversify, or external libraries
- Demo-specific entities or repository interfaces
- Speculative types added "just in case" they might be needed later
