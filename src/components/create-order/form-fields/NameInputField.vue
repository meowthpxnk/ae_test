<template>
  <div class="name input-field">
    <label for="name"><span>Имя</span></label>
    <input
      type="text"
      id="name"
      v-model="input_data"
      @blur="blurInput"
      @input="changeInput"
    />
    <div class="error" v-if="errors_list.required && touched">
      Необходимо заполнить имя пользователя.
    </div>
  </div>
</template>

<script setup lang="ts">
import useValidator from "@/compossables/validator";
import { useCreateOrderStore } from "@/store/create_order_form";
import { useUserData } from "@/store/user_data";
const user_data_store = useUserData();
const form_store = useCreateOrderStore();

const validate_req = {
  min_length: null,
  max_length: null,
  required: true,
};

const { touched, input_data, blurInput, errors_list } =
  useValidator(validate_req);

const changeInput = () => {
  form_store.changeName(input_data.value, errors_list.value);
};

input_data.value = user_data_store.getUserName;
changeInput();
</script>

<style scoped>
</style>