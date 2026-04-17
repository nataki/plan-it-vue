<script setup lang="ts">
import { useTodos } from "@/stores/todos.ts";
import type { Todo } from "@/types/todo.ts";
import Checkbox from "primevue/checkbox";
import UrgentButton from "./UrgentButton.vue";
import ImportantButton from "./ImportantButton.vue";

const { todo } = defineProps<{ todo: Todo }>();
const todosStore = useTodos();
</script>

<template>
  <Checkbox
    :modelValue="todo.isFinished"
    :inputId="`todo-${todo.id}`"
    :name="`todo-${todo.id}`"
    binary
    @value-change="todosStore.toggleTodo(todo.id)"
  />
  <label class="text-left" :for="`todo-${todo.id}`">{{ todo.text }}</label>
  <div class="flex justify-around align-baseline">
    <UrgentButton
      mode="icon"
      :model-value="todo.isUrgent"
      @update:model-value="todosStore.toggleUrgent(todo.id)"
    />
    <ImportantButton
      mode="icon"
      :model-value="todo.isImportant"
      @update:model-value="todosStore.toggleImportant(todo.id)"
    />
  </div>
  <div>
    <span v-if="todo.isUrgent && todo.isImportant">Do First</span>
    <span v-if="todo.isUrgent && !todo.isImportant">Delegate</span>
    <span v-if="!todo.isUrgent && todo.isImportant">Schedule</span>
    <span v-if="!todo.isUrgent && !todo.isImportant">Eliminate</span>
  </div>
  <Button
    icon="pi pi-times"
    severity="contrast"
    rounded
    variant="text"
    :aria-label="`Delete ${todo.text}`"
    @click="todosStore.removeTodo(todo.id)"
  />
</template>
