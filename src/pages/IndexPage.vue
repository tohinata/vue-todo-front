<template>
  <q-page padding>
    <ul>
      <task2
        v-for="(task, index) in tasks"
        :key="task.id"
        :task3="task"
        :index="index"
      >
      </task2>
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
          id: 1,
          name: "Go to shop",
          dueDate: "2022/05/01",
          dueTime: "18:30",
        },
        {
          id: 2,
          name: "Get bananas",
          dueDate: "2022/05/05",
          dueTime: "12:00",
        },
        {
          id: 3,
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
  components: {
    task2: require("src/components/MyTask.vue").default,
  },
});
</script>

<style scoped></style>
