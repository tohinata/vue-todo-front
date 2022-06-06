<template>
  <q-card>
    <modal_header>Edit Task</modal_header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal_task_name v-model:name="taskToSubmit.name" ref="modalTaskName" />
        <modal_due_date
          v-model:dueDate="taskToSubmit.dueDate"
          @clear="clearDueDate"
        />

        <modal_due_time
          v-if="taskToSubmit.dueDate"
          v-model:dueTime="taskToSubmit.dueTime"
        />
      </q-card-section>

      <modal_buttons></modal_buttons>

      <pre>{{ taskToSubmit }}</pre>
    </form>
  </q-card>
</template>

<script>
import modal_header from "components/ModalHeader.vue";
import modal_task_name from "components/ModalTaskName.vue";
import modal_due_date from "components/ModalDueDate.vue";
import modal_due_time from "components/ModalDueTime.vue";
import modal_buttons from "components/ModalButtons.vue";

export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false,
      },
    };
  },
  methods: {
    submitForm() {
      console.log("submit form 호출 함수");
      this.$refs.modalTaskName.$refs.name.validate();
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      //this.addTask(this.taskToSubmit);
      this.$emit("close");
    },
    clearDueDate() {
      this.taskToSubmit.dueDate = "";
      this.taskToSubmit.dueTime = "";
    },
  },
  components: {
    modal_header,
    modal_task_name,
    modal_due_date,
    modal_due_time,
    modal_buttons,
  },
};
</script>
