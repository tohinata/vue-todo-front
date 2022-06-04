import { defineStore } from "pinia"

export const useTasksStore = defineStore("todoList", {
  state: () => ({
    tasks: {
      'ID1': {
        name: "Go to shop",
        completed: false,
        dueDate: "2022/05/31",
        dueTime: "18:43",
      },
      'ID2': {
        name: "Get bananas",
        completed: false,
        dueDate: "2022/06/04",
        dueTime: "08:03",
      },
      'ID3': {
        name: "Eat apples",
        completed: false,
        dueDate: "2022/05/14",
        dueTime: "21:03",
      },
    },
  }),

  getters: {
    getAllTask: (state) => {
      return state.tasks
    }
  },

  actions: {

  }
})
