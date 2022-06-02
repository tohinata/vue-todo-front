<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks" :key="(task, index)">
        <div>{{ task.name }} - {{ index }}</div>
        <small>{{ task.dueDate }} @ {{ task.dueTime }}</small>
        <button @click="deleteTask(index)">X</button>
      </li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      tasks: [
        {
          name: "Go to shop",
          dueDate: "2022/05/01",
          dueTime: "18:30",
        },
        {
          name: "Get bananas",
          dueDate: "2022/05/05",
          dueTime: "12:00",
        },
        {
          name: "Get apples",
          dueDate: "2022/05/15",
          dueTime: "18:25",
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
  },
});
</script>

<style scoped></style>
