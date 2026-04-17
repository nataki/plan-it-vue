import { ref } from "vue";
import type { Todo } from "@/types/todo.ts";

type AddPayload = Pick<Todo, "text" | "isUrgent" | "isImportant">;

export function useNewItemForm(options?: { resetFlagsOnSubmit?: boolean }) {
  const newText = ref("");
  const isUrgent = ref(false);
  const isImportant = ref(false);

  function handleSubmit(onAdd: (payload: AddPayload) => void) {
    if (!newText.value) return;
    onAdd({ text: newText.value, isUrgent: isUrgent.value, isImportant: isImportant.value });
    newText.value = "";
    if (options?.resetFlagsOnSubmit) {
      isUrgent.value = false;
      isImportant.value = false;
    }
  }

  return { newText, isUrgent, isImportant, handleSubmit };
}
