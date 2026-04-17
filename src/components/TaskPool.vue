<script setup lang="ts">
import { storeToRefs } from "pinia";
import { usePool } from "@/stores/pool.ts";
import PoolItem from "./PoolItem.vue";
import Badge from "primevue/badge";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import UrgentButton from "./UrgentButton.vue";
import ImportantButton from "./ImportantButton.vue";
import { useNewItemForm } from "@/composables/useNewItemForm.ts";

const poolStore = usePool();
const { items } = storeToRefs(poolStore);

const { newText, isUrgent, isImportant, handleSubmit } = useNewItemForm({ resetFlagsOnSubmit: true });

function addItem() {
  handleSubmit(poolStore.addItem);
}
</script>

<template>
  <div class="pool-wrap">
    <div class="pool-header">
      <i class="pi pi-inbox" />
      <span class="pool-title">Task Pool</span>
      <Badge :value="items.length" severity="secondary" />
    </div>

    <div class="pool-form">
      <div>
        <InputText
          v-model="newText"
          placeholder="Add to pool..."
          class="w-full"
          @keydown.enter="addItem"
        />
      </div>
      <div class="flex gap-2 mt-2">
        <UrgentButton mode="labeled" v-model="isUrgent" />
        <ImportantButton mode="labeled" v-model="isImportant" />
        <Button
          icon="pi pi-plus"
          rounded
          :disabled="!newText"
          @click="addItem"
        />
      </div>
    </div>

    <hr />

    <div class="pool-list">
      <PoolItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<style scoped>
.pool-wrap {
  text-align: left;
}

.pool-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.pool-title {
  font-weight: 600;
  font-size: 1.1rem;
  flex: 1;
}

.pool-form {
  margin-bottom: 1rem;
}

.pool-list {
  display: grid;
  grid-template-columns: 30px 1fr 70px min-content min-content;
  align-items: center;
  gap: 4px;
}
</style>
