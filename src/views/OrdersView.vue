<template>
  <orders-component/>
</template>

<script lang="ts">
import OrdersComponent from '@/components/orders-table/OrdersComponent.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { OrdersComponent },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>