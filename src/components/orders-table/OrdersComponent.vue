<template>
  <div
    class="orders-table-block mp-block"
    :class="{ 'admin-pannel': user_store.isAdmin }"
  >
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
        <tr v-for="order in orders_list" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.name }}</td>
          <td>{{ order.address }}</td>
          <td>{{ dateParse(order.date) }}</td>
          <td>{{ statusParse(order.status) }}</td>
          <td>{{ order.comment }}</td>
          <div class="actions" v-if="user_store.isAdmin">
            <button
              v-if="order.status !== 'completed'"
              @click="completeOrder(order.id)"
            >
              <img src="@/assets/icons/check.png" alt="" />
            </button>
            <button @click="deleteOrder(order.id)">
              <img src="@/assets/icons/trash-bin.png" alt="" />
            </button>
          </div>
        </tr>
      </tbody>
    </table>
  </div>
  <div
    @click.self="orders_store.closeAcceptModal"
    class="modal-container"
    v-if="orders_store.showDeleteModal"
  >
    <div class="modal-win accept-modal">
      <div class="message">
        <span>Действительно удалить?</span>
      </div>
      <div class="actions">
        <button @click="orders_store.deleteOrder"><span>Да</span></button>
        <button @click="orders_store.closeAcceptModal">
          <span>Отменить</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrdersList } from "@/store/orders";
import { useUserData } from "@/store/user_data";
import { computed } from "vue";
const user_store = useUserData();
const orders_store = useOrdersList();
const orders_list = computed(() => {
  return orders_store.getOrdersSortId
});

const dateParse = (date: string) => {
  const date_parse = new Date(date);
  return `${date_parse.toLocaleDateString("ru-RU", {
    month: "long",
    day: "2-digit",
  })} ${date_parse.getFullYear()}`;
};

const statusParse = (status: string) => {
  switch (status) {
    case "completed":
      return "Выполнен";
    case "new":
      return "Новый";
    default:
      break;
  }
};

const deleteOrder = (id: number) => {
  orders_store.showAcceptModal(id);
};
const completeOrder = (id: number) => {
  orders_store.completeOrder(id);
};
</script>

<style scoped lang="scss">
</style>