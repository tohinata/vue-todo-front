<template>
  <li>
    <div>{{ task3.id }} {{ task3.name }} - {{ index }}</div>
    <small>{{ task3.dueDate }} @ {{ task3.dueTime }}</small>
    <button @click="deleteTask(index)">X</button>
  </li>
</template>

<script>
export default {
  props: ["task3", "index"],
};
</script>

<style scoped></style>
