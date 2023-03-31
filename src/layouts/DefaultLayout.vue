<template>
  <HeaderComponent />
  <router-view />
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue";
import { getOrders } from "@/api";
import { useOrdersList } from "@/store/orders";

const orders_store = useOrdersList()
const orders = getOrders().then(orders =>{
  orders_store.updateOrders(orders)
})
</script>

<style scoped>
</style>