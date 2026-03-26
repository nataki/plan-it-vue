<script setup lang="ts">
import { useTodos } from "@/stores/todos.ts";
import type { Todo } from "@/stores/todos.ts";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

const { todo } = defineProps<{ todo: Todo }>();
const todosStore = useTodos();
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox
      :modelValue="todo.isFinished"
      :inputId="`todo-${todo.id}`"
      :name="`todo-${todo.id}`"
      binary
      @value-change="todosStore.toggleTodo(todo.id)"
    />
    <label :for="`todo-${todo.id}`">{{ todo.text }}</label>
    <Button
      icon="pi pi-times"
      severity="contrast"
      rounded
      variant="text"
      :aria-label="`Delete ${todo.text}`"
      @click="todosStore.removeTodo(todo.id)"
    />
  </div>
</template>
