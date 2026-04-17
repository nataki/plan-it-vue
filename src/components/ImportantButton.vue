<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{ modelValue: boolean; mode: "icon" | "labeled" }>();
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();
</script>

<template>
  <Button
    :icon="props.modelValue ? 'pi pi-star-fill' : 'pi pi-star'"
    :variant="props.mode === 'icon' ? 'text' : 'outlined'"
    :rounded="props.mode === 'labeled'"
    :label="props.mode === 'labeled' ? 'Important' : undefined"
    :size="props.mode === 'labeled' ? 'small' : undefined"
    :class="
      props.mode === 'icon'
        ? { 'text-gray-500!': !props.modelValue, 'text-blue-500!': props.modelValue }
        : { 'border-gray-500! text-gray-500!': !props.modelValue, 'border-blue-500! text-blue-500!': props.modelValue }
    "
    @click="emit('update:modelValue', !props.modelValue)"
  />
</template>
