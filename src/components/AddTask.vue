<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add task </div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="row q-mb-sm">
        <q-input outlined v-model="taskToSubmit.name" :rules="[val => !!val || 'Field is required']" label="Task name"
          class="col" />
      </div>

      <div class="row q-mb-sm">
        <q-input outlined label="Due date" :rules="[val => !!val || 'Field is required']"
          v-model="taskToSubmit.dueDate">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="taskToSubmit.dueDate" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="row q-mb-sm">
        <q-input outlined label="Due time" :rules="[val => !!val || 'Field is required']"
          v-model="taskToSubmit.dueTime">
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy cover transition-show="scale" transition-hide="scale">
                <q-time v-model="taskToSubmit.dueTime" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>



    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat label="Save" color="primary" v-close-popup />
    </q-card-actions>
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
      }
    }
  }
}
</script>
