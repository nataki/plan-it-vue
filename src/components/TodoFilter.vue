<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodos } from "@/stores/todos.ts";
import RadioButton from "primevue/radiobutton";

const { filter } = storeToRefs(useTodos());
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
</template>
