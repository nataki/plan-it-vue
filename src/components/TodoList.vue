<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodos } from "@/stores/todos.ts";
import TodoFilter from "./TodoFilter.vue";
import TodoItem from "./TodoItem.vue";
import TodoAddForm from "./TodoAddForm.vue";

const { filteredTodos } = storeToRefs(useTodos());
</script>

<template>
  <TodoFilter />

  <hr />

  <div class="todo-grid">
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>

  <TodoAddForm />
</template>
<style scoped>
.todo-grid {
  padding: 16px 8px;
  display: grid;
  grid-template-columns: 30px 1fr 70px 100px min-content;
  grid-column-gap: 4px;
  align-items: center;
}
</style>
