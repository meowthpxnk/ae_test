<template>
  <div class="form">
    <div class="input-box">
      <label for="username"><img src="@/assets/icons/user.png" alt="" /></label>
      <input
        type="text"
        id="username"
        v-model="input_data"
        placeholder="Имя"
        @blur="blurInput"
        @input="changeInput"
        @focus="auth_store.disableAuthError"
      />
    </div>
    <div v-if="auth_store.isAuthError" class="error"></div>
    <div v-else-if="errors_list.required && touched" class="error">
      Необходимо заполнить имя пользователя.
    </div>
  </div>
</template>

<script setup lang="ts">
import useValidator from "@/compossables/validator";
import { useAuthorisationStore } from "@/store/auth_form";

const validate_req = {
  min_length: null,
  max_length: null,
  required: true,
};

const { touched, input_data, blurInput, errors_list } =
  useValidator(validate_req);

const auth_store = useAuthorisationStore();

console.log(auth_store)
console.log(auth_store.disableAuthError)


const changeInput = () => {
  auth_store.changeUsername(input_data.value, errors_list.value);
};
</script>

<style scoped>
</style>