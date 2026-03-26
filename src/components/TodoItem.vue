<script setup lang="ts">
import { useTodos } from "@/stores/todos.ts";
import type { Todo } from "@/stores/todos.ts";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

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
  <label :for="`todo-${todo.id}`">{{ todo.text }}</label>
  <div class="flex justify-around align-baseline">
    <Button
      icon="pi pi-bolt"
      variant="text"
      :class="{
        'text-gray-500!': !todo.isUrgent,
        'text-yellow-500!': todo.isUrgent,
      }"
      @click="todosStore.toggleUrgent(todo.id)"
    />
    <Button
      :icon="todo.isImportant ? 'pi pi-star-fill' : 'pi pi-star'"
      variant="text"
      :class="{
        'text-gray-500!': !todo.isImportant,
        'text-blue-500!': todo.isImportant,
      }"
      @click="todosStore.toggleImportant(todo.id)"
    />
    <!--    <i v-if="todo.isUrgent" class="pi pi-bolt text-yellow-500"></i>-->
    <!--    <i v-if="todo.isImportant" class="pi pi-star text-blue-500"></i>-->
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
