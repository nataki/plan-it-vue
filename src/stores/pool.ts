import { defineStore } from "pinia";
import { useTodos } from "@/stores/todos.ts";
import type { Todo } from "@/types/todo.ts";

export const usePool = defineStore("pool", {
  state: () => ({
    items: [] as Todo[],
    nextId: 0,
  }),
  persist: true,
  actions: {
    addItem({
      text,
      isUrgent,
      isImportant,
    }: Pick<Todo, "text" | "isUrgent" | "isImportant">) {
      this.items.push({ id: this.nextId++, text, isUrgent, isImportant, isFinished: false });
    },
    removeItem(id: number) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    toggleFinished(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.isFinished = !item.isFinished;
    },
    toggleUrgent(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.isUrgent = !item.isUrgent;
    },
    toggleImportant(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) item.isImportant = !item.isImportant;
    },
    moveToTodos(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (!item) return;
      useTodos().addTodo({ text: item.text, isUrgent: item.isUrgent, isImportant: item.isImportant });
      this.removeItem(id);
    },
  },
});
