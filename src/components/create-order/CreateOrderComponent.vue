<template>
  <div class="create-order-block mp-block">
    <div class="form-title">
      <span>Создание заказа</span>
    </div>
    <div class="create-order-form">
      <div class="name input-field">
        <label for="name"><span>Имя</span></label>
        <input type="text" id="name" />
        <div class="error">Необходимо заполнить имя пользователя.</div>
      </div>
      <div class="address input-field">
        <label for="address"><span>Адрес</span></label>
        <input type="text" id="address" />
        <div class="error">Необходимо заполнить адрес заказа.</div>
      </div>
      <div class="comment input-field">
        <label for="comment">Комментарий</label>
        <textarea type="text" id="comment"></textarea>
      </div>
      <div class="main-button">
        <button><span>Создать</span></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>