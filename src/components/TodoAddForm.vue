<script setup lang="ts">
import { ref } from "vue";
import { useTodos } from "@/stores/todos.ts";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const todosStore = useTodos();
const newTodoText = ref("");
const isNewTodoUrgent = ref(false);
const isNewTodoImportant = ref(false);

function addTodo() {
  if (!newTodoText.value) return;
  todosStore.addTodo({
    text: newTodoText.value,
    isImportant: isNewTodoImportant.value,
    isUrgent: isNewTodoUrgent.value,
  });
  newTodoText.value = "";
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <label for="newTodo">
      New Todo:
      <InputText
        v-model="newTodoText"
        inputId="newTodo"
        type="text"
        class="ms-2!"
        @keydown.enter="addTodo"
      />
    </label>
    <Button
      icon="pi pi-bolt"
      rounded
      variant="outlined"
      label="Urgent"
      size="small"
      :class="{
        'border-gray-500! text-gray-500!': !isNewTodoUrgent,
        'border-yellow-500! text-yellow-500!': isNewTodoUrgent,
      }"
      @click="isNewTodoUrgent = !isNewTodoUrgent"
    />
    <Button
      :icon="isNewTodoImportant ? 'pi pi-star-fill' : 'pi pi-star'"
      rounded
      variant="outlined"
      label="Important"
      :class="{
        'border-gray-500! text-gray-500!': !isNewTodoImportant,
        'border-blue-500! text-blue-500!': isNewTodoImportant,
      }"
      size="small"
      @click="isNewTodoImportant = !isNewTodoImportant"
    />
    <Button :disabled="!newTodoText" @click="addTodo">Add</Button>
  </div>
</template>
