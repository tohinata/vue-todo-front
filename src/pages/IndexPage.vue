<template>
  <q-page padding>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  // eslint-disable-next-line
  data() {
    return {
      tasks: ["Go to shop", "Get bananas", "Get apples"],
    };
  },
});
</script>

<style scoped></style>
