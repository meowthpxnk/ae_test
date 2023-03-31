import { defineStore } from 'pinia'

import { OrderModel } from '@/api/types'
import { useOrdersList } from './orders'

const orders_store = useOrdersList()

interface ValidateReq {
    min_length: boolean,
    max_length: boolean,
    required: boolean,
}

export type FormData = {
    name: {
        value: string,
        errors_list: ValidateReq
    },
    address: {
        value: string,
        errors_list: ValidateReq
    },
    comment: {
        value: string,
    }
};

export const useCreateOrderStore = defineStore({
    id: 'create_order',
    state: () => (
        {
            name: {
                value: '',
                errors_list: {
                    min_length: true,
                    max_length: true,
                    required: true,
                }
            },
            address: {
                value: '',
                errors_list: {
                    min_length: true,
                    max_length: true,
                    required: true,
                }
            },
            comment: {
                value: '',
            },
        } as FormData
    ),
    getters: {
        isInvalidForm(state): boolean {
            const flags: boolean[] = []

            for (const key of Object.keys(state.name.errors_list)) {
                flags.push(state.name.errors_list[key as keyof ValidateReq])
            }

            for (const key of Object.keys(state.address.errors_list)) {
                flags.push(state.address.errors_list[key as keyof ValidateReq])
            }

            return !flags.every(key => key === false)

        }

    },
    actions: {
        changeName(name: string, errors_list: ValidateReq) {
            this.name.value = name;
            this.name.errors_list = errors_list;
        },
        changeAddress(address: string, errors_list: ValidateReq) {
            this.address.value = address;
            this.address.errors_list = errors_list;
        },
        changeComment(comment: string) {
            this.comment.value = comment;
        },

        createOrder() {
            const date = new Date

            const date_string = date.toLocaleDateString("en-US", {
                month: "short",
                day: "2-digit",
                year: 'numeric',
            })

            orders_store.createOrder({
                name: this.name.value,
                id: orders_store.getLastId + 1,
                address: this.address.value,
                date: date_string,
                status: 'new',
                comment: this.comment.value,
            })
        }
    },
})