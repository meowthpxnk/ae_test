<template>
  <div class="address input-field">
    <label for="address"><span>Адрес</span></label>
    <input
      type="text"
      id="address"
      v-model="input_data"
      @blur="blurInput"
      @input="changeInput"
    />
    <div class="error" v-if="errors_list.required && touched">
      Необходимо заполнить адрес заказа.
    </div>
  </div>
</template>

<script setup lang="ts">
import useValidator from "@/compossables/validator";
import { useCreateOrderStore } from "@/store/create_order_form";


const validate_req = {
  min_length: null,
  max_length: null,
  required: true,
};

const { touched, input_data, blurInput, errors_list } =
  useValidator(validate_req);



const form_store = useCreateOrderStore();

const changeInput = () => {
  form_store.changeAddress(input_data.value, errors_list.value);
};
</script>

<style scoped>
</style>