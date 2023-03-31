import { defineStore } from 'pinia'
import { OrderModel } from "@/api/types"
import { deleteOrder, completeOrder, createOrder } from '@/api'

export const useOrdersList = defineStore({
    id: 'orders_list',
    state: () => (
        {
            orders: [] as OrderModel[],
            show_delete_modal: false,
            active_order_id: null as null | number,
        }
    ),
    getters: {
        getOrders(state): OrderModel[] {
            return state.orders
        },
        getLastId(state): number {
            const orders: OrderModel[] = state.orders

            const sorted_list = orders.sort(function (a, b) {
                return a.id - b.id;
            });

            const last_item = sorted_list[sorted_list.length - 1]

            if (!last_item) {
                return 0
            }

            return last_item.id
        },
        showDeleteModal(state): boolean {
            return state.show_delete_modal
        },
        getOrdersSortId(state): OrderModel[] {
            return state.orders.sort((a, b) => {
                return a.id - b.id;
            });
        }
    },
    actions: {
        createOrder(order: OrderModel) {
            try {
                createOrder(order)
            } catch (e) {
                throw "error_delete"
            }
            this.orders.push(order)
        },

        showAcceptModal(id: number) {
            this.active_order_id = id
            this.show_delete_modal = true
        },

        closeAcceptModal() {
            this.show_delete_modal = false
            this.active_order_id = null
        },

        deleteOrder() {
            try {
                deleteOrder(this.active_order_id)
            } catch (e) {
                throw "error_delete"
            }

            const order = this.orders.filter(order => order.id === this.active_order_id)[0]
            this.orders.splice(this.orders.indexOf(order), 1)
            this.closeAcceptModal()
        },

        completeOrder(id: number) {
            const order = this.orders.filter(order => order.id === id)[0]
            try {
                completeOrder(order)
            } catch (e) {
                throw "error_complete"
            }
            order.status = 'completed'
        },

        updateOrders(orders: OrderModel[]) {
            // console.log(orders)
            this.orders = orders
            console.log(this.getOrders)
        },
    },
})