import { defineStore } from "pinia";

interface Todo {
  text: string;
  id: number;
  isFinished: boolean;
}

export const useTodos = defineStore("todos", {
  state: () => ({
    todos: [] as Todo[],
    filter: "all" as "all" | "finished" | "unfinished",
    nextId: 0,
  }),
  getters: {
    finishedTodos(state) {
      return state.todos.filter((todo) => todo.isFinished);
    },
    unfinishedTodos(state) {
      return state.todos.filter((todo) => !todo.isFinished);
    },
    filteredTodos(state) {
      if (state.filter === "finished") {
        return state.todos.filter((todo) => todo.isFinished);
      } else if (state.filter === "unfinished") {
        return state.todos.filter((todo) => !todo.isFinished);
      }
      return state.todos;
    },
  },
  actions: {
    addTodo(text: string) {
      this.todos.push({ text, id: this.nextId++, isFinished: false });
    },
  },
});
