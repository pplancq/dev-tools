# `shared/application`

The `shared/application` folder contains the **application layer** of the shared kernel — code that
orchestrates the domain and defines the contracts that infrastructure must fulfill, without doing either
of those jobs itself.

## What the application layer represents

In Clean Architecture, the **application layer** sits between the domain and the outside world. Its job is to:

1. **Orchestrate use cases.** A use case is a single, named, testable business operation (e.g., "Get the list
   of demo users"). It calls domain objects and repository interfaces; it does not contain business rules
   itself — it delegates those to the domain.
2. **Define infrastructure contracts.** Use cases depend on repository interfaces that are often declared in
   the domain, but the application layer adds its own interface contracts for services (e.g., caching helpers,
   event buses).
3. **Carry data across layer boundaries via DTOs.** A **Data Transfer Object (DTO)** is a plain, typed
   structure that carries data from one layer to another without exposing internal domain objects.

## Dependency rules

```
shared/application
  ✅ can import from: shared/domain
  ❌ must NOT import from: shared/infrastructure
  ❌ must NOT import from: shared/ui
  ❌ must NOT import from: any bounded context
```

If application code needs something from infrastructure, it should define an interface that infrastructure
implements (Dependency Inversion).

## What you can put here

- Shared use-case helper base classes or abstract factories
- Cross-context DTO types that carry data across layer boundaries
- Common abstractions used by multiple application layers (e.g., a `Result<T, E>` type)

## What you should not put here

- Feature-specific use cases (those belong in their bounded context's `application` folder)
- React components, hooks, or JSX
- Infrastructure implementations
- Domain entities or business rules

## Rule of thumb

If the code describes _what the application does_ (not _how it stores data_ or _how it looks_) and at least
two bounded contexts could plausibly depend on it, this folder is the right place.
