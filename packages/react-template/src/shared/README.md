# `shared`

The `shared` folder is the **Shared Kernel** of the application — a DDD term for a small, deliberately
stable set of code that multiple bounded contexts genuinely need.

Path alias: `@Shared/*`

## What the Shared Kernel is (and is not)

In Domain-Driven Design, a **Shared Kernel** is a portion of the domain model that two or more bounded contexts
explicitly agree to share. It is held to a higher standard than context-specific code:

- **Small by intention.** Every addition to `shared` is available to every context. A mistake here propagates
  everywhere. Err on the side of keeping code inside its bounded context.
- **Stable by discipline.** Changing `shared` can affect all contexts simultaneously. Any modification should
  be consciously reviewed.
- **Agnostic by design.** `shared` must contain no feature logic specific to a bounded context. If a file
  references a demo concept, it belongs in `demo`, not here.
- **Direction is one-way.** Bounded contexts may import from `shared`. `shared` must never import from a
  bounded context (`@Demo/*`, etc.).

## What belongs here

- Cross-context contracts and types
- Generic infrastructure helpers (e.g., HTTP client wrappers)
- Common application-level abstractions
- Shared UI utilities that are not tied to any specific context experience

## What should not go here

- Demo pages, forms, layouts, or visual components
- Feature-specific services that belong inside a bounded context
- Convenience helpers without clear ownership or a concrete need to share them

## Folder map

| Sub-folder                                      | Role                                                              |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| [`domain/`](./domain/README.md)                 | Shared pure contracts, types, and abstractions. Zero dependencies |
| [`application/`](./application/README.md)       | Shared helpers for orchestration — must not depend on infra or UI |
| [`infrastructure/`](./infrastructure/README.md) | Shared technical adapters — may depend on external libraries      |
| [`ui/`](./ui/README.md)                         | Shared React hooks and components — must not depend on infra      |

## Before you add to `shared`

Ask yourself:

1. Does more than one bounded context genuinely need this?
2. Is it stable enough to be shared without frequent modification?
3. Does it belong to one of the four Clean Architecture layers?

If the answer to any of these is "not sure", keep it in its bounded context first and promote it to `shared`
only when the need is proven.
