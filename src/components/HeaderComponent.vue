<template>
  <header>
    <div class="header-content mp-block">
      <div class="nav-bar">
        <nav-bar/>
      </div>
      <div class="auth-bar">
        <span class="user-name">Имя Пользователя</span>
        <button class="exit-button"><span>Выйти</span></button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "./NavBar.vue";

export default defineComponent({
  setup() {
    return {};
  },
  components: { NavBar }
});
</script>

<style scoped>
</style>