# `shared/infrastructure`

The `shared/infrastructure` folder contains **technical adapters and concrete implementations** that can be
reused across bounded contexts.

## What the infrastructure layer represents

In Clean Architecture, **infrastructure** is the outermost ring alongside UI. It is the layer that deals with
the real world: databases, HTTP APIs, browser storage, timers, external SDKs, and so on.

The key principle at work here is the **Dependency Inversion Principle (DIP)**:

> High-level modules (domain, application) should not depend on low-level modules (infrastructure). Both
> should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

In practice this means:

- The **domain** defines a `UserRepositoryInterface` describing what it needs ("give me a user by ID").
- The **infrastructure** provides the concrete `HttpUserRepository` that knows _how_ to fetch the user.
- The domain and application layers never import `HttpUserRepository` directly — they work through the
  interface. The DI container wires the concrete class to the interface at startup.

This **Ports and Adapters** pattern (also called Hexagonal Architecture) makes the domain fully testable in
isolation and lets you swap a real HTTP repository for a mock without touching any business logic.

## What you can put here

- Generic HTTP helpers and API client wrappers (e.g., `fetchApi`)
- Shared persistence adapters (local storage wrappers, IndexedDB helpers)
- Generic caching utilities
- Third-party SDK wrappers that multiple contexts share
- Base classes for repositories or adapters

## What you should not put here

- Feature-specific repositories or adapters (those belong in the bounded context's `infrastructure` folder)
- UI code, React components, or hooks
- Business rules or domain objects

## In this starter

The `http/` sub-folder holds a generic `fetchApi` helper used by the demo's HTTP repositories. It lives in
`shared/infrastructure` (not in `demo`) because the helper itself is context-agnostic — any bounded context
could use it to call an HTTP API.

```
shared/infrastructure/http/
├── fetchApi.ts          ← generic HTTP adapter
├── fetchApi.type.d.ts   ← request/response type definitions
└── constant.ts          ← HTTP-layer constants
```
