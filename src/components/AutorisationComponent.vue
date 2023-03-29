<template>
  <div class="auth-container">
    <div class="authorisation ui-form">
      <div class="forms">
        <div class="form not-valid">
          <div class="input-box">
            <label for="username"
              ><img src="@/assets/icons/user.png" alt=""
            /></label>
            <input type="text" id="username" v-model="login" placeholder="Имя"/>
          </div>
          <!-- <div class="error">Необходимо заполнить имя пользователя.</div> -->
        </div>
        <div class="form">
          <div class="input-box">
            <label for="password"
              ><img src="@/assets/icons/key.png" alt=""
            /></label>
            <input type="password" id="password" v-model="password" placeholder="Пароль"/>
          </div>
          <!-- <div class="error">Необходимо заполнить пароль.</div> -->
          <!-- <div class="error">Минимальная длинна пароля 8 символов.</div> -->
        </div>
      </div>
      <div class="call-btn cur-point">
        <button :class="{ blocked: false }">
          <span>Войти</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>