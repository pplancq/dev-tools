# `demo`

The `demo` folder is the template's **example Bounded Context**.

Path alias: `@Demo/*`

## What is a Bounded Context?

In Domain-Driven Design (DDD), a **Bounded Context** is an isolated, autonomous slice of the application that
owns its own domain model, its own ubiquitous language, and its own internal implementation. It communicates
with the outside world (other contexts, the app layer) through well-defined entry points only.

Practical rules:

- A bounded context **never imports directly from another bounded context**. Cross-context communication goes
  through clearly defined contracts (events, DTOs, or a shared kernel type).
- A bounded context **owns its full stack**: from the domain model all the way to the UI.
- Every concept inside a context is named consistently — this is the **Ubiquitous Language** principle. The
  same word must mean the same thing everywhere inside the context.

## Layer structure

The `demo` context follows Clean Architecture's four-layer model:

```
demo/
├── domain/          ← pure business contracts, entities, repository interfaces
├── application/     ← use cases, DTOs, orchestration
├── infrastructure/  ← concrete implementations, adapters
├── ui/              ← React pages, components, hooks, routing
├── serviceDemo.ts   ← Inversify ContainerModule that wires this context's DI
└── serviceIdentifiers.ts ← unique Symbols for each service in this context
```

### `domain/`

The heart of the context. Contains:

- **Repository interfaces** — describe the data access operations the domain needs (e.g.,
  `DemoUserRepositoryInterface`, `ArchitecturePrincipleRepositoryInterface`). These are TypeScript interfaces;
  the implementation lives in `infrastructure/`.
- **Entities** — objects with identity and lifecycle (e.g., `DemoUser`).
- **Value Objects** — immutable objects defined by their values (no identity).

Zero external dependencies. No React, no Inversify, no HTTP.

### `application/`

The orchestration layer. Contains:

- **Use cases** — named, testable business operations (e.g., `GetDemoUsersUseCase`). Each use case implements
  an interface (`GetDemoUsersUseCaseInterface`) so it can be replaced by a test double without modifying the UI.
- **DTOs** — plain, typed structures that carry data across layer boundaries (e.g., `ArchitecturePrinciple`,
  `ProfileFormValues`).

Can import from `domain`. Must not import from `infrastructure` or `ui`.

### `infrastructure/`

The adapter layer. Contains:

- **Concrete repository implementations** (e.g., `HttpDemoUserRepository`, `StaticArchitecturePrincipleRepository`).
  Each class implements an interface defined in `domain/`, satisfying the **Dependency Inversion Principle**.

Can import from `domain` (the interfaces it implements) and from `@Shared/infrastructure` (shared adapters).
Must not import from `application` or `ui`.

### `ui/`

The presentation layer. Contains:

- **Pages** — top-level route components
- **Components** — context-specific visual components
- **Layouts** — page-level layout wrappers
- **Forms** — form composition (React Hook Form)
- **Hooks** — React Query hooks that bridge use cases to the React component tree
- **Routing** — route declarations exported to `@App/routing`

The UI layer uses `useService` from `@Shared/ui/hooks/useService` to resolve use cases from the DI container.
It calls use cases; it does not call repositories or infrastructure directly.

## Dependency direction within the context

```
ui  →  application  →  domain
infrastructure  -.→  domain (implements its interfaces)
```

The arrows show allowed import direction. Reversing them is a Clean Architecture violation.

## DI wiring

### `serviceIdentifiers.ts`

Declares unique `Symbol` identifiers for every service in the context:

```ts
export const DEMO_SERVICES = Object.freeze({
  DemoUserRepository: Symbol.for('Demo.DemoUserRepository'),
  GetDemoUsersUseCase: Symbol.for('Demo.GetDemoUsersUseCase'),
  // ...
});
```

Using `Symbol.for` with a namespaced string (`Demo.*`) avoids collisions with other contexts.

### `serviceDemo.ts`

A `ContainerModule` that binds each service identifier to its concrete implementation using Inversify's
`toDynamicValue`. This pattern avoids TypeScript decorators entirely, keeping the domain and application layers
free of framework metadata:

```ts
export const serviceDemo: ContainerModule = new ContainerModule(options => {
  options
    .bind<DemoUserRepositoryInterface>(DEMO_SERVICES.DemoUserRepository)
    .toDynamicValue(() => new HttpDemoUserRepository())
    .inSingletonScope();

  options
    .bind<GetDemoUsersUseCaseInterface>(DEMO_SERVICES.GetDemoUsersUseCase)
    .toDynamicValue(
      services => new GetDemoUsersUseCase(services.get<DemoUserRepositoryInterface>(DEMO_SERVICES.DemoUserRepository)),
    )
    .inSingletonScope();
});
```

`serviceDemo` is loaded into the global container in `@App/config/serviceContainer.ts`.

## UI organization principle

The UI layer uses practical, readable sub-folders (`components`, `layouts`, `pages`, `forms`, `hooks`,
`routing`). Atomic Design can still guide how you think about component responsibility — keeping components
small and composable — but strict `atoms/molecules/organisms/templates` directories add indirection without
real value in most projects.

## Important: demo as a model, not a constraint

The `demo` context exists to show the path. When you start your real project:

1. Rename or replace `demo` with your first real bounded context.
2. Add its alias to `tsconfig.json` (e.g., `"@Orders/*": ["src/orders/*"]`).
3. Create its `serviceIdentifiers.ts` and `service[ContextName].ts` (e.g., `serviceHome.ts`).
4. Register its container module in `app/config/serviceContainer.ts`.

Keep visual components in their context's `ui/` folder until there is a proven, concrete reason to move them
to `shared`.
