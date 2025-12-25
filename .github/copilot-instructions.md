# Copilot / AI agent instructions — e-ticaret

Purpose: provide quick, project-specific guidance so an AI agent is immediately productive in this repo.

## Quick start (commands)
- Start dev server: `npm run dev` (uses Vite HMR)
- Build production bundle: `npm run build` (Vite -> `dist`)
- Preview production build: `npm run preview`
- Lint: `npm run lint` (root `eslint.config.js` uses ESM flat config)

## Big picture
- Frontend single-page app built with **React (v19)** and **Vite**. Entry: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Styling: **Tailwind CSS** (config lives at `src/tailwind.config.js`) and `src/index.css` + component CSS (e.g., `src/App.css`).
- State & side-effects: **@reduxjs/toolkit** and **redux-thunk** are installed (no store present yet). If you add state, follow RTK slice patterns (e.g., `src/features/<name>/slice.js` and `src/store/index.js`).
- Routing: **react-router-dom@5.x** is used (v5 APIs like `<Switch>`, `useHistory`, `Route exact`), so use v5 patterns rather than v6.

## Project-specific conventions & gotchas
- Project uses **ESM** everywhere (`package.json` has `type: "module"`) — use `import`/`export default` in config and code files (see `eslint.config.js` & `vite.config.js`).
- Tailwind & PostCSS configs are in `src/` (see `src/tailwind.config.js` and `src/postcss.config.js`) — when modifying paths or tooling, update these files.
- Static assets: `public/` is served at root (e.g., `/vite.svg`), while `src/assets/` is imported from JS/JSX (`import logo from './assets/...')`.
- ESLint specifics: the project uses the new flat config and sets `'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }]` — do not remove or flag intentionally-named variables beginning with capital letters or underscores as unused without review.

## File & code patterns to follow
- Use `.jsx` for React components (current files: `src/App.jsx`, `src/main.jsx`).
- Prefer functional components + hooks (HMR and React plugin are set up).
- Put feature code under `src/features/<feature>` and components under `src/components` if added — keep single-responsibility components and small feature slices if using RTK.

## Testing and CI
- There are **no tests or CI configured** in this repo. Do not add a test framework or CI configuration without asking the maintainers; if requested, propose using **Vitest** (best pairing for Vite) and add `test`/`test:watch` scripts in `package.json`.

## When you modify configs or add tooling
- Keep ESM format for config files (import/export default). If adding new build plugins or PostCSS/Tailwind changes, update `src/postcss.config.js` and `src/tailwind.config.js` accordingly.
- If you add a global store, export it from `src/store/index.js` and import it in `src/main.jsx` before rendering.

> Note: This file documents only patterns discoverable in the repo. If you need preferences (testing framework, branching rules, CI), ask the maintainers before implementing.

---

Please review: are there any repository-specific conventions or patterns I missed or that should be emphasized?