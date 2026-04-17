# plan-it-vue

A task management app built with Vue 3. Tasks are organized by urgency and importance using the [Eisenhower matrix](https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method), with a **Task Pool** sidebar for capturing ideas before committing them to the main list.

## Features

- **Todo list** — add, complete, and delete tasks
- **Urgency & importance flags** — toggle per task; automatically labelled by quadrant:
  - Urgent + Important → **Do First**
  - Urgent + Not Important → **Delegate**
  - Not Urgent + Important → **Schedule**
  - Not Urgent + Not Important → **Eliminate**
- **Filter** — view All / Finished / Unfinished todos
- **Task Pool** — staging area in the sidebar; add tasks with urgency/importance flags and promote them to the main list when ready
- **Persistence** — both stores are persisted to `localStorage` via `pinia-plugin-persistedstate`
- **Responsive layout** — two-column grid on desktop, single column on mobile (< 600px)

## Tech stack

| Layer | Library |
|-------|---------|
| Framework | Vue 3 + TypeScript |
| Routing | Vue Router 5 |
| State | Pinia 3 |
| UI components | PrimeVue 4 (Aura theme) + PrimeIcons |
| Styling | Tailwind CSS 4 |
| Build | Vite 7 |
| Unit tests | Vitest |
| E2E tests | Playwright |
| Linting | ESLint + OxLint + Prettier |

## Project structure

```
src/
├── types/
│   └── todo.ts          # Shared Todo interface
├── stores/
│   ├── todos.ts         # Main task list store
│   └── pool.ts          # Task pool store
├── components/
│   ├── TodoList.vue     # Todo list container
│   ├── TodoItem.vue     # Individual todo row
│   ├── TodoFilter.vue   # Filter radio buttons
│   ├── TodoAddForm.vue  # New todo form
│   ├── TaskPool.vue     # Sidebar task pool
│   └── PoolItem.vue     # Individual pool item
└── views/
    ├── HomeView.vue     # Main page
    └── AboutView.vue    # About page
```

## Setup

```sh
npm install
```

### Development

```sh
npm run dev
```

### Build

```sh
npm run build
```

### Test

```sh
npm run test:unit   # Vitest unit tests
npm run test:e2e    # Playwright e2e tests
```

### Lint & format

```sh
npm run lint    # ESLint + OxLint
npm run format  # Prettier
```

## Requirements

Node `^20.19.0` or `>=22.12.0`
