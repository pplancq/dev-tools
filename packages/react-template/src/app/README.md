# `app`

The `app` folder is the **application bootstrap layer**. It is not a bounded context — it has no business
domain of its own. Its single responsibility is to assemble all the pieces (providers, router, DI container,
contexts) and expose the application to the browser.

Path alias: `@App/*`

## Contents

| Subfolder / file     | Role                                                                             |
| -------------------- | -------------------------------------------------------------------------------- |
| `App.tsx`            | Root React component — composes providers and router                             |
| `AppHTMLElement.tsx` | Custom-element bootstrap (`<app-react>`). Mounts/unmounts the React root         |
| `assets/`            | Global CSS reset, base styles, and app-wide static assets                        |
| `config/`            | App-wide configuration and the **composition root** (`serviceContainer.ts`)      |
| `providers/`         | React provider components: `ServiceProvider`, `QueryClientProvider`, `Providers` |
| `routing/`           | Top-level router and route aggregation                                           |

## Composition root

`config/serviceContainer.ts` is the **composition root** of the dependency injection system. It is the single
place in the application where the Inversify container is created and all bounded-context service collections
are loaded:

```ts
import { serviceDemo } from '@Demo/serviceDemo';
import { Container } from 'inversify';

export const serviceContainer = new Container();
serviceContainer.load(serviceDemo);
// add more context modules here as the application grows
```

The composition root is the **only** place that knows about concrete implementations. Every other layer receives
dependencies through interfaces and the DI container.

## Provider tree

The `Providers` component wraps the application in its provider tree. The order matters:

```
ServiceProvider          ← makes the DI container available via React context
  └── QueryClientProvider ← makes React Query available
        └── {children}    ← the rest of the application
```

`ServiceProvider` must be outermost so that any inner provider can use `useService` to resolve DI services.

## Custom element bootstrap

`AppHTMLElement.tsx` registers the application as a
[custom element](https://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define) (`<app-react>`).
This allows the React app to be embedded in any HTML host without tight coupling to a specific framework or
page structure. The custom element mounts a React root in `connectedCallback` and unmounts it in
`disconnectedCallback`.

## Dependency rules for `app`

- ✅ Can import from `@Shared/*` and any bounded context (e.g., `@Demo/*`)
- ✅ Responsible for high-level orchestration only
- ❌ Must not contain business rules or feature-specific logic
- ❌ Generic helpers belong in `shared`, not here

## Avoid

- Business rules or domain objects
- Feature-specific orchestration that belongs to a bounded context
- Generic helpers that should live in `shared`
