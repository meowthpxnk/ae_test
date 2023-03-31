<template>
  <div class="form">
    <div class="input-box">
      <label for="password"><img src="@/assets/icons/key.png" alt="" /></label>
      <input
        type="password"
        id="password"
        placeholder="Пароль"
        v-model="input_data"
        @blur="blurInput"
        @input="changeInput"
        @focus="auth_store.disableAuthError"
      />
    </div>
    <div v-if="auth_store.isAuthError" class="error">
      Неверные имя пользователя или пароль.
    </div>
    <div v-else-if="errors_list.required && touched" class="error">
      Необходимо заполнить пароль.
    </div>
    <div v-else-if="errors_list.min_length && touched" class="error">
      Минимальная длинна пароля 8 символов.
    </div>
  </div>
</template>

<script setup lang="ts">
import useValidator from "@/compossables/validator";
import { useAuthorisationStore } from "@/store/auth_form";

const validate_req = {
  min_length: 8,
  max_length: null,
  required: true,
};

const { touched, input_data, blurInput, errors_list } =
  useValidator(validate_req);
const auth_store = useAuthorisationStore();

const changeInput = () => {
  auth_store.changePassword(input_data.value, errors_list.value);
};
</script>

<style scoped>
</style>