<!--
* 버튼 누르는 기능이
- js에서는 onclick=""
- vue 에서는 @click=""

* 디렉티브
- 'v-' 접두어가 있는 특수한 속성
- 디렉티브의 속성 값이 변경될 때 DOM과 바인딩하여 DOM을 변경하는 역할
- ex) v-bind, v-on 등등
- 콜론 (:) 을 사용하여 전달인자 사용
- 자주 사용되는 v-bind와 v-on은 생략가능
- ex) :key 은 v-bind:key 과 같음
-->
>

<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <task v-for="(task, key) in tasks" :key="key" :task="task"> </task>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { useTasksStore } from "stores/tasks.js";
import task from "components/MyTasks.vue";

export default defineComponent({
  computed: {
    tasks() {
      return useTasksStore().tasks;
    },
  },

  components: {
    // eslint-disable-next-line
    task,
  },
});
</script>

<style scoped></style>
