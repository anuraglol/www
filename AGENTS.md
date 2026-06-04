# Agentic Coding Guide

This repository contains a **Nuxt 4** application using **Vue 3** and **TypeScript**.
Coding agents should follow these guidelines to maintain consistency and quality.

## Dont add comments like ever

## Always make sure loc in any file is <250, break into components if necessary

## 1. Build, Lint, and Test

The project uses **Bun** as the package manager (indicated by `bun.lock`).

### Commands

- **Install Dependencies:** `bun install`
- **Development Server:** `bun run dev`
- **Build for Production:** `bun run build`
- **Type Check:** `bun run typecheck` (runs `nuxt typecheck`)
- **Linting:** `bun run lint` (runs `oxlint`)
- **Formatting:** `bun run fmt` (runs `oxfmt`)

### Testing

_Currently, there are no specific test scripts or test files (like `_.test.ts`) configured in the repository.\*
If you add tests:

- Use **Vitest** (standard for Nuxt/Vue).
- Place tests alongside components (`component.spec.ts`) or in a `tests/` directory.

## 2. Code Style & Conventions

### Framework & Tech Stack

- **Nuxt Version:** Nuxt 4.x
- **Language:** TypeScript
- **UI Framework:** `@nuxt/ui` (Tailwind CSS based)
- **Data Fetching:** `@tanstack/vue-query` (via `@hebilicious/vue-query-nuxt` or similar wrapper)
- **Image Optimization:** `@nuxt/image` (`<NuxtImg>`)

### Directory Structure

- **Source Directory:** `app/` (Standard Nuxt 4 structure)
- **Components:** `app/components/`
- **Composables:** `app/composables/`
- **Pages:** `app/pages/`
- **Configuration:** `nuxt.config.ts`, `app/app.config.ts`

### File Naming

- **Components:** Use **lowercase/kebab-case** for filenames (e.g., `app/components/masonary.vue`, `app/components/divider.vue`).
- **Composables:** Use **camelCase** starting with `use` (e.g., `app/composables/useData.ts`).
- **Utils:** Use **camelCase** or **lowercase** (e.g., `app/utils/images.ts`).

### Component Style (`.vue`)

- Use **`<script setup lang="ts">`**.
- Use **Scoped CSS** (`<style scoped>`) or Tailwind utility classes.
- **Indentation:** 2 spaces.
- **Semicolons:** Yes, use semicolons.
- **Quotes:** Double quotes `"` are prevalent in HTML attributes; single `'` or double `"` in script (follow existing file consistency).

**Example Component:**

```vue
<script setup lang="ts">
import { ref } from "vue";

interface Props {
  title: string;
}
defineProps<Props>();

const isOpen = ref(false);
</script>

<template>
  <div class="container">
    <h1 class="text-xl font-bold">{{ title }}</h1>
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
}
</style>
```

### Composable Style (`.ts`)

- Use named exports.
- Encapsulate logic in a function starting with `use`.
- Return a reactive object or refs.

**Example Composable:**

```typescript
export const useUser = () => {
  const user = ref(null);
  // ... logic
  return { user };
};
```

### Data Fetching

- Prefer `useQuery` from `@tanstack/vue-query` for server-state management (caching, invalidation).
- Use `$fetch` for direct API calls inside query functions.
- Example:
  ```typescript
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await $fetch("/api/users"),
  });
  ```

### Linting & Formatting rules

- The project uses `oxlint` and `oxfmt`.
- Run `bun run lint:fix` to automatically fix linting issues where possible.
- Run `bun run fmt` to format code.

## 3. Error Handling

- Use `try/catch` blocks for async operations not handled by `useQuery`.
- Handle `isError` and `error` states when using `useQuery`.
- Use Nuxt's `createError` for throwing errors in pages/API routes that should trigger error pages.

## 4. Nuxt 4 Specifics

- Files are located in `app/` not the root.
- Use auto-imports for Nuxt composables (`useHead`, `useRouter`, etc.) and Vue functions (`ref`, `computed`). Do not manually import them unless necessary.
