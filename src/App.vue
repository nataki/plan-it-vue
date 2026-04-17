<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TaskPool from "@/components/TaskPool.vue";
</script>

<template>
  <div class="page-wrap">
    <header class="page-header">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </header>
    <nav class="page-nav">Nav</nav>
    <main class="page-main">
      <article>
        <RouterView />
      </article>
    </main>
    <aside class="page-sidebar"><TaskPool /></aside>
    <footer class="page-footer">Footer</footer>
  </div>
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    font-size: 1rem;
  }
}

.page-wrap {
  background: white;
  height: calc(100vh - 10px);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.33);

  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
  grid-template-rows: min-content min-content 1fr min-content;
  gap: 1px;

  > * {
    padding: 1rem;
    text-align: center;
  }

  @media (max-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;
    > * {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
}

.page-header {
  grid-column: 1 / -1;
}

.page-sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
.page-nav {
  grid-column: 2 / 3;
}
.page-main {
  grid-column: 2 / 3;
}

.page-footer {
  grid-column: 1 / -1;
}

details p {
  text-transform: none;
  text-align: left;
}
</style>
