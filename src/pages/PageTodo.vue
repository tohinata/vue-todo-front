₩<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task"> </task>
    </q-list>

    <div class="absolute-bottom text-center">

    <q-btn
    @click="showAddTask = true"
    round
    color="primary"
    size="24px"
    icon="add"
    />
    </div>

    <q-dialog v-model="showAddTask">
<add_task />
    </q-dialog>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useTasksStore } from "stores/tasks.js";
import task from "components/MyTasks.vue";
import add_task from "components/AddTask.vue";


export default defineComponent({
  data() {
return {
  showAddTask: false
}
  },
  computed: {
    tasks() {
      return useTasksStore().getAllTask;
    },
  },

  components: {
    task,
    add_task,
  },
});
</script>

<style scoped></style>
