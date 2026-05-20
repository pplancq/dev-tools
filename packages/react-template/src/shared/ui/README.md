# `shared/ui`

The `shared/ui` folder contains **UI-layer code that is genuinely reusable across bounded contexts** — hooks,
utilities, and components that carry no feature identity.

## What the UI layer represents

In Clean Architecture, the **UI layer** is the outermost ring. Its job is to:

- Present data to the user
- Translate user actions into application-layer calls (use cases)
- Never execute business logic or call infrastructure directly

The UI layer depends on the application layer (via use cases and DTOs) and occasionally on domain types.
It must **never** import from `infrastructure`.

## What belongs here

### `hooks/useService`

`useService` is the bridge between the Inversify DI container and React components:

```ts
const myService = useService<MyServiceInterface>(SERVICE_IDENTIFIER);
```

It reads the container from `ServiceContext` (provided by `ServiceProvider` in `app/providers`) and resolves
the requested service. This pattern means React components declare _what they need_ without knowing _how it is
constructed_. Swapping a real implementation for a test double requires only a different container binding —
zero changes to the component.

`useService` lives in `shared/ui` because any bounded context can use it to resolve its own services.

## Dependency rules

```
shared/ui
  ✅ can import from: shared/domain, shared/application
  ❌ must NOT import from: shared/infrastructure
  ❌ must NOT import from: any bounded context
```

The UI layer must not call infrastructure directly — if it needs external data it does so through a use case or
React Query integration, not by importing an HTTP adapter.

## What you should not put here

- Demo-specific visual components (buttons, forms, layouts, logos, nav links)
- Feature-specific React hooks
- Infrastructure adapters or API calls
