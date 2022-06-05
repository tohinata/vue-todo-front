import { defineStore } from "pinia";

export const useTasksStore = defineStore("todoList", {
  state: () => ({
    tasks: {
      ID1: {
        name: "Go to shop",
        completed: false,
        dueDate: "2022/05/31",
        dueTime: "18:43",
      },
      ID2: {
        name: "Get bananas",
        completed: false,
        dueDate: "2022/06/04",
        dueTime: "08:03",
      },
      ID3: {
        name: "Eat apples",
        completed: false,
        dueDate: "2022/05/14",
        dueTime: "21:03",
      },
    },
  }),

  getters: {
    getAllTask: (state) => {
      return state.tasks;
    },
  },

  actions: {
    updateTask(idToFind) {
      //const todo = this.tasks.find((obj) => obj.id == idToFind);
      //if (todo) {
      //  todo.completed = !todo.completed;
      //}
      console.log("여기서 업데이트 진행 해야할 거 같음");
    },
    deleteTask(itemID) {
      //this.tasks = this.tasks.filter((obj) => {
      //  return obj.id !== idToFind;
      //});
      console.log("맵에서 아이템 하나 삭제");
    },
  },
});
