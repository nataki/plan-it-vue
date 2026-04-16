<script setup lang="ts">
import { useTodos } from "@/stores/todos.ts";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import UrgentButton from "./UrgentButton.vue";
import ImportantButton from "./ImportantButton.vue";
import { useNewItemForm } from "@/composables/useNewItemForm.ts";

const todosStore = useTodos();
const { newText, isUrgent, isImportant, handleSubmit } = useNewItemForm();

function addTodo() {
  handleSubmit(todosStore.addTodo);
}
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <label for="newTodo">
      New Todo:
      <InputText
        v-model="newText"
        inputId="newTodo"
        type="text"
        class="ms-2!"
        @keydown.enter="addTodo"
      />
    </label>
    <UrgentButton mode="labeled" v-model="isUrgent" />
    <ImportantButton mode="labeled" v-model="isImportant" />
    <Button :disabled="!newText" @click="addTodo">Add</Button>
  </div>
</template>
