<template>
  <div class="comment input-field">
    <label for="comment">Комментарий</label>
    <textarea
      type="text"
      id="comment"
      v-model="input_data"
      @input="changeInput"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import useValidator from "@/compossables/validator";
import { useCreateOrderStore } from "@/store/create_order_form";

const { input_data } = useValidator();

const form_store = useCreateOrderStore();

const changeInput = () => {
  form_store.changeComment(input_data.value);
};
</script>

<style scoped>
</style>