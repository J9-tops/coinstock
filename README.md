# CoinStock

Coinstock is a small, clean Angular application that demonstrates building a dashboard-driven UI for visualizing trading data. The project was generated with Angular CLI (v20.x) and contains a modular structure with components, pages, services, and utilities to make it easy to extend.

This README highlights what the project contains, how to run it locally, and why it’s a good sample to show to employers.

## Project structure

- `src/app/` — main application code
  - `components/` — reusable UI components (dashboard pieces, shared header/navbar)
  - `pages/` — page-level components (e.g., dashboard)
  - `services/` — global services (data, state, helpers)
  - `types/` & `utils/` — shared types and helper functions
- `src/environments/` — environment-specific configs
- `public/` / `index.html` — static entry

Open `src/app` to inspect component implementations and tests.

## Quick start (run locally)

These commands assume you have Node.js and the Angular CLI installed.

1. Install dependencies

```powershell
npm install
```

2. Start the development server

```powershell
ng serve --open
```

or, if your package.json exposes a start script:

```powershell
npm start
```

The app will be available at http://localhost:4200 and will hot-reload as you edit files.

## Build for production

```powershell
ng build --configuration production
```

Build output will be placed into the `dist/` folder by default.

## Tests

Run unit tests (Karma):

```powershell
ng test
```

Component-level spec files exist next to components (e.g., `area-chart.spec.ts`, `overview.spec.ts`). These are a good starting point to demonstrate test coverage during a review.

## What to look for in the code (tips for reviewers / employers)

- Component composition: small components assembled into pages (see `src/app/components/dashboard`).
- Separation of concerns: services for data/business logic vs. components for presentation (`src/app/services`).
- Environment configs: `src/environments` for build-time differences.
