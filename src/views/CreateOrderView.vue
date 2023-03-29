<template>
  <create-order-component />
</template>

<script lang="ts">
import CreateOrderComponent from "@/components/create-order/CreateOrderComponent.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { CreateOrderComponent },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>