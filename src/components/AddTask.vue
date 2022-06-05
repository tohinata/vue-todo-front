<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add task</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input
            outlined
            v-model="taskToSubmit.name"
            :rules="[(val) => !!val || 'Field is required']"
            ref="name"
            label="Task name"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.name"
                @click="taskToSubmit.name = ''"
                name="close"
                class="cursor-pointer"
              />
            </template>
          </q-input>
        </div>

        <div class="row q-mb-sm">
          <q-input
            outlined
            label="Due date"
            :rules="[(val) => !!val || 'Field is required']"
            v-model="taskToSubmit.dueDate"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueDate"
                @click="clearDueDate"
                name="close"
                class="cursor-pointer"
              />

              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div v-if="taskToSubmit.dueDate" class="row q-mb-sm">
          <q-input
            outlined
            label="Due time"
            :rules="[(val) => !!val || 'Field is required']"
            v-model="taskToSubmit.dueTime"
            class="col"
          >
            <template v-slot:append>
              <q-icon
                v-if="taskToSubmit.dueTime"
                @click="taskToSubmit.dueTime = ''"
                name="close"
                class="cursor-pointer"
              />

              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy
                  cover
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Save" color="primary" type="submit" />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
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
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
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
};
</script>
