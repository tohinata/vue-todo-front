<!-- 
* 툴바 속성 변경
* footer 추가
* scsss 스타일 추가
   : .q-drawer 의 설정이 어떤 때에 적용되는지 확인 안됨;;
-->

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs no-caps>
        <q-route-tab to="/" name="todo" icon="list" label="Todo" />
        <q-route-tab
          to="/settings"
          name="settings"
          icon="settings"
          label="Settings"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      class="bg-primary text-white"
      v-model="leftDrawerOpen"
      :breakpoint="200"
      :width="250"
      bordered
    >
      <q-list dark class="bg-primary text-white">
        <q-item-label header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Todo",
    icon: "list",
    link: "#",
  },
  {
    title: "Settings",
    icon: "settings",
    link: "#/settings",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(true);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
    };
  },
});
</script>

<style lang="scss">
.q-footer {
  display: none;
}
.q-drawer {
  .q-router-link--exact-active {
    color: white !important;
  }
}
</style>
