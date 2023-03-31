<template>
  <div class="auth-container">
    <div class="authorisation ui-form">
      <div class="forms">
        <user-name-validate @validate="validateUsername" />
        <password-validate @validate="validatePass" />
      </div>
      <div class="call-btn cur-point">
        <button :class="{ blocked: is_infalid_form }" @click="autorisate">
          <span>Войти</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserNameValidate from "./validators/UserNameValidate.vue";
import PasswordValidate from "./validators/PasswordValidate.vue";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthorisationStore } from "@/store/auth_form";

const auth_store = useAuthorisationStore()

const router = useRouter();

const form_valid = ref({
  password: false,
  username: false,
});

const validatePass = (value: boolean) => {
  form_valid.value.password = value;
};

const validateUsername = (value: boolean) => {
  form_valid.value.username = value;
};

const is_infalid_form = computed(() => {
  return auth_store.isInvalidForm
});

const autorisate = async () => {
  if (!is_infalid_form.value) {
    try {
      const info = auth_store.autorisateUser().then((res) => {
        router.push({name: 'orders'})
      })
    } catch(e) {
      throw "error"
    }
  }
};
</script>

<style scoped>
</style>