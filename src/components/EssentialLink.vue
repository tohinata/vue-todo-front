<template>
  <!-- 
  * a 태그: 문서를 링크 시키기 위해 사용
  - target 속성: 창을 어떻게 열지 설정
    ~ _self: 링크 클릭한 해당 창
    ~ _black: 새창으로
    ~ _parent: 부모 창에서
    ~ _top: 가장 상위의 창에서(없으면 _self)
  - href 속성: 연결할 주소 지정
-->
  <q-item clickable tag="a" target="_self" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },

    link: {
      type: String,
      default: "#",
    },

    icon: {
      type: String,
      default: "",
    },
  },
});
</script>
