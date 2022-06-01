<template>
  <q-page padding>
    <!--
      Counter 버튼
    -->
    <button style="position: absolute; right: 10px" @click="counter++">
      {{ counter }}
    </button>

    <!--
      v-model 속성 
      ~ v-bind 와 v-on의 기능이 조합
      ~ v-bind : 뷰 인스턴스의 데이터 속성을 해당 HTML 요소에 연결할 때
      ~ v-on : 해당 HTML 요소의 이벤트를 뷰 인스턴스의 로직과 연결할 때
      ~ 입력을 받으면 실시간으로 message 변수가 업데이트 됨
    -->
    <input
      v-model="message"
      @keyup="handleKeyup"
      @keyup.esc="clearMessage"
      @keyup.enter="alertMessage"
      v-autofocus
      :style="errorStyle"
      ref="messageInput"
    />

    <!--
      Clear 버튼
    -->
    <button @click="clearMessage">Clear</button>

    <div>{{ message.length }}</div>

    <h5 v-if="message.length" class="border-grey">{{ message }}</h5>

    <h5 v-else>No Message entered.</h5>

    <hr />

    <p>Uppercase message: {{ messageUppercase }}</p>
    <p>Lowercase message: {{ messageLowercase }}</p>
  </q-page>
</template>

<script>
/*
* computed
- 종속된 값에 의존하며, 반환하는 결과를 저장(캐싱)
- 종속 대상의 변경이 일어나기 전까지 호출 되지 않음

* methods
- 일반적인 함수를 정의할 때 사용
- 렌더링이 일어날 때마다 항상 함수를 실행
*/

import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      message: "I love vue.js so hard!",
      counter: 0,
    };
  },

  computed: {
    messageUppercase() {
      console.log("messageUppercase was fired");
      return this.message.toUpperCase();
    },

    messageLowercase() {
      console.log("messageLowercase was fired");
      return this.message.toLowerCase();
    },

    // eslint-disable-next-line
    errorStyle() {
      if (this.message.length > 22) {
        return {
          color: "red",
          background: "pink",
        };
      }
    },
  },

  methods: {
    clearMessage() {
      this.message = "";
    },

    handleKeyup(e) {
      console.log(e);
      if (e.keyCode == 27) {
        this.clearMessage();
      } else if (e.keyCode == 13) {
        this.alertMessage();
      }
    },

    alertMessage() {
      alert(this.message);
    },
  },

  directives: {
    autofocus: {
      mounted(el) {
        console.log("input mounted");
        el.focus();
      },
    },
  },

  // 생명 주기 함수들
  // ~ update 관련 함수가 호출안됨;;
  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
    console.log(this.$refs);
    this.$refs.messageInput.className = "bg-green";
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeUnmount() {
    console.log("beforeUnmount");
  },

  unmounted() {
    console.log("unmounted");
  },
});
</script>

<style scoped>
.border-grey {
  border: 1px solid grey;
}

input,
button {
  font-size: 23px;
}

.error {
  color: red;
  background: pink;
}
</style>
