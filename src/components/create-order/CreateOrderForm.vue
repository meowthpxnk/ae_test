<template>
  <div class="create-order-form">
    <name-input-field />
    <address-input-field />
    <comment-input-field />
    <div class="main-button">
      <button @click="createOrder" :class="{ blocked: is_infalid_form }">
        <span>Создать</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AddressInputField from "./form-fields/AddressInputField.vue";
import CommentInputField from "./form-fields/CommentInputField.vue";
import NameInputField from "./form-fields/NameInputField.vue";
import { useCreateOrderStore } from "@/store/create_order_form";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const form_store = useCreateOrderStore();
const is_infalid_form = computed(() => {
  return form_store.isInvalidForm;
});

const createOrder = () => {
  if (!is_infalid_form.value) {
    try{
      form_store.createOrder();
      router.push({
        name: 'orders'
      })
    } catch(e){
      console.error(e)
    }
  }
};
</script>

<style scoped>
</style>