<script setup lang="ts">
import { ref } from "vue";
import { useTodos } from "@/stores/todos.ts";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

const todosStore = useTodos();
const newTodoText = ref("");

function addTodo() {
  if (!newTodoText.value) return;
  todosStore.addTodo(newTodoText.value);
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
    <Button :disabled="!newTodoText" @click="addTodo">Add</Button>
  </div>
</template>
