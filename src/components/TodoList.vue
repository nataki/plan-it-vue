<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodos } from "@/stores/todos.ts";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import RadioButton from "primevue/radiobutton";
import Checkbox from "primevue/checkbox";

const todosStore = useTodos();
const { filter, filteredTodos } = storeToRefs(todosStore);

const newTodoText = ref("");

function addTodo() {
  if (!newTodoText.value) {
    return;
  }

  todosStore.addTodo(newTodoText.value);
  newTodoText.value = "";
}
</script>

<template>
  <div class="flex flex-wrap gap-4 py-4">
    <div class="flex items-center gap-2">
      <RadioButton v-model="filter" inputId="all" name="all" value="all" />
      <label for="all">All</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="filter"
        inputId="finished"
        name="finished"
        value="finished"
      />
      <label for="finished">Finished</label>
    </div>
    <div class="flex items-center gap-2">
      <RadioButton
        v-model="filter"
        inputId="unfinished"
        name="unfinished"
        value="unfinished"
      />
      <label for="unfinished">Unfinished</label>
    </div>
  </div>

  <hr />

  <div class="flex flex-wrap gap-4 flex-col py-4">
    <div
      v-for="todo in filteredTodos"
      :key="todo.id"
      class="flex items-center gap-2"
    >
      <Checkbox
        v-model="todo.isFinished"
        inputId="todo.id"
        name="todo.id"
        value="todo.id"
      />
      <label for="todo.id"> {{ todo.text }} </label>
    </div>
  </div>

  <div class="flex flex-wrap gap-2">
    <label for="newTodo">
      New Todo:
      <InputText
        v-model="newTodoText"
        inputId="newTodo"
        type="text"
        @keypress.enter="addTodo"
      />
    </label>
    <Button :disabled="!newTodoText" @click="addTodo">Add</Button>
  </div>
</template>
