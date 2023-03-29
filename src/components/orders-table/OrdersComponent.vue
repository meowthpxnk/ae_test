<template>
  <div class="orders-table-block mp-block">
    <table>
      <thead>
        <tr>
          <th>
            <span>№</span>
            <span class="arrow"></span>
          </th>
          <th>
            <span>Имя клиента</span>
            <span class="arrow"></span>
          </th>
          <th>
            <span>Адрес</span>
            <span class="arrow"></span>
          </th>
          <th>
            <span>Дата заказа</span>
            <span class="arrow"></span>
          </th>
          <th>
            <span>Статус</span>
            <span class="arrow"></span>
          </th>
          <th>
            <span>Комментарий</span>
            <span class="arrow"></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 10" :key="i">
          <td>{{ i }}</td>
          <td>Имя пользователя</td>
          <td>Пирогова 15 к2</td>
          <td>20.02.2000</td>
          <td>Оплачен</td>
          <td>Забрать с адреса срочно</td>
          <div class="actions">
            <button><img src="@/assets/icons/check.png" alt="" /></button>
            <button><img src="@/assets/icons/trash-bin.png" alt="" /></button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="modal-container" v-if="false">
    <div class="modal-win accept-modal">
      <div class="message">
        <span>Действительно удалить?</span>
      </div>
      <div class="actions">
        <button><span>Да</span></button>
        <button><span>Отменить</span></button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
</style>