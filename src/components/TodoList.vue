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

  <div class="flex flex-wrap flex-col py-4">
    <TodoItem v-for="todo in filteredTodos" :key="todo.id" :todo="todo" />
  </div>

  <TodoAddForm />
</template>
