<script setup lang="ts">
import { useTodos } from "@/stores/todos.ts";
import type { Todo } from "@/stores/todos.ts";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

const props = defineProps<{ todo: Todo }>();
const todosStore = useTodos();
</script>

<template>
  <div class="flex items-center gap-2">
    <Checkbox
      v-model="props.todo.isFinished"
      :inputId="`todo-${props.todo.id}`"
      :name="`todo-${props.todo.id}`"
      :value="props.todo.id"
    />
    <label :for="`todo-${props.todo.id}`">{{ props.todo.text }}</label>
    <Button
      icon="pi pi-times"
      severity="contrast"
      rounded
      variant="text"
      :aria-label="`Delete ${props.todo.text}`"
      @click="todosStore.removeTodo(props.todo.id)"
    />
  </div>
</template>
