<script setup lang="ts">
import Button from "primevue/button";

const props = defineProps<{ modelValue: boolean; mode: "icon" | "labeled" }>();
const emit = defineEmits<{ "update:modelValue": [value: boolean] }>();
</script>

<template>
  <Button
    icon="pi pi-bolt"
    :variant="props.mode === 'icon' ? 'text' : 'outlined'"
    :rounded="props.mode === 'labeled'"
    :label="props.mode === 'labeled' ? 'Urgent' : undefined"
    :size="props.mode === 'labeled' ? 'small' : undefined"
    :class="
      props.mode === 'icon'
        ? { 'text-gray-500!': !props.modelValue, 'text-yellow-500!': props.modelValue }
        : { 'border-gray-500! text-gray-500!': !props.modelValue, 'border-yellow-500! text-yellow-500!': props.modelValue }
    "
    @click="emit('update:modelValue', !props.modelValue)"
  />
</template>
