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
    <q-list bordered>
      <q-item
        v-for="task in tasks"
        v-bind:key="task.id"
        @click="task.completed = !task.completed"
        v-bind:class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
        clickable
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strikethrough': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
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
      </q-item>
    </q-list>
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
          completed: false,
          dueDate: "2022/05/31",
          dueTime: "18:43",
        },
        {
          id: 2,
          name: "Get bananas",
          completed: false,
          dueDate: "2022/06/04",
          dueTime: "08:03",
        },
        {
          id: 3,
          name: "Eat apples",
          completed: false,
          dueDate: "2022/05/14",
          dueTime: "21:03",
        },
      ],
    };
  },
});
</script>

<style scoped></style>
