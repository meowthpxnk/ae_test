<template>
  <header>
    <div class="header-content mp-block">
      <div class="nav-bar">
        <nav-bar/>
      </div>
      <div class="auth-bar">
        <span class="user-name">{{ user_name }}</span>
        <button class="exit-button" @click="singOut"><span>Выйти</span></button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import { useUserData } from "@/store/user_data";
import { useRouter } from "vue-router";
import NavBar from "./NavBar.vue";
const router = useRouter()

const user_data_store = useUserData()

const user_name = user_data_store.getUserName

const singOut = () => {
  user_data_store.singOut()
  router.push({name:'autorisation'})
}
</script>

<style scoped>
</style>