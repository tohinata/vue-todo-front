<template>
  <q-item
    @click="setComplete"
    v-bind:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
    clickable
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox v-model="completeField" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough': task.completed }">
        {{ task.name }}
      </q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side>
      <div class="row">
        <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{ task.dueDate }}</q-item-label
          >
          <q-item-label class="row justify-end" caption>
            {{ task.dueTime }}</q-item-label
          >
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <q-btn
        @click.stop="promptToDeleted(id)"
        flat
        round
        color="red"
        icon="delete"
      />
    </q-item-section>
  </q-item>
</template>

<script>
import { useTasksStore } from "stores/tasks.js";

export default {
  methods: {
    setComplete() {
      useTasksStore().updateTask();

      // eslint-disable-next-line
      return (this.task.completed = !this.task.completed);
    },

    promptToDeleted(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Really delete?",
          ok: {
            push: true,
          },
          cancel: {
            color: "negative",
          },
          persistent: true,
        })
        .onOk(() => {
          console.log("삭제 다이얼로그 Ok");
        });
    },
  },

  computed: {
    completeField: {
      get() {
        return this.task.completed;
      },
      set(value) {
        // eslint-disable-next-line
        this.task.completed = value;
      },
    },
  },
  props: ["task", "id"],
};
</script>

<style scoped></style>
