<script setup lang="ts">
import { usePool } from "@/stores/pool.ts";
import type { Todo } from "@/types/todo.ts";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";

const { item } = defineProps<{ item: Todo }>();
const poolStore = usePool();
</script>

<template>
  <Checkbox
    :modelValue="item.isFinished"
    :inputId="`pool-${item.id}`"
    :name="`pool-${item.id}`"
    binary
    @value-change="poolStore.toggleFinished(item.id)"
  />
  <label :for="`pool-${item.id}`">{{ item.text }}</label>
  <div class="flex justify-around">
    <Button
      icon="pi pi-bolt"
      variant="text"
      :class="{
        'text-gray-400!': !item.isUrgent,
        'text-yellow-500!': item.isUrgent,
      }"
      @click="poolStore.toggleUrgent(item.id)"
    />
    <Button
      :icon="item.isImportant ? 'pi pi-star-fill' : 'pi pi-star'"
      variant="text"
      :class="{
        'text-gray-400!': !item.isImportant,
        'text-blue-500!': item.isImportant,
      }"
      @click="poolStore.toggleImportant(item.id)"
    />
  </div>
  <Button
    icon="pi pi-arrow-right"
    variant="text"
    severity="contrast"
    :aria-label="`Move ${item.text} to todos`"
    @click="poolStore.moveToTodos(item.id)"
  />
  <Button
    icon="pi pi-times"
    variant="text"
    severity="contrast"
    :aria-label="`Delete ${item.text}`"
    @click="poolStore.removeItem(item.id)"
  />
</template>
