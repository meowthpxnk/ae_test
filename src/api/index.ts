import { ApiAuthResponce, AuthInput, OrderModel, UserModel } from "./types";
import axios from "axios";
const BASE_URL = 'http://localhost:3000/api/';

const api = axios.create({
    baseURL: BASE_URL,
    // withCredentials: true,
});

// const config = {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
//     credentials: 'same-origin',
//     crossdomain: true,
// };

api.defaults.headers.common['Content-Type'] = 'application/json';

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const errMessage = error.response.data.message as string;
        if (errMessage.includes('not logged in') && !originalRequest._retry) {
            originalRequest._retry = true;
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);

// export const authentificateUser = async (user_auth_data: AuthInput) => {
//     const response = await api.post<apiAuthResponce>('authentificate_user', user_auth_data);
//     return response.data;
// }

export const getMeFn = async () => {
    const response = await api.get<ApiAuthResponce>('users/me');
    return response.data;
};

export const getOrders = async () => {
    const response = await api.get<OrderModel[]>('events');
    return response.data;
}

export const deleteOrder = async (id: number | null) => {
    const response = await api.delete<OrderModel[]>(`events/${id}`);
    return response.data;
}

export const completeOrder = async (order: OrderModel) => {
    order.status = 'completed'
    const response = await api.put<OrderModel>(`events/${order.id}`, order);
    return response.data;
}

export const createOrder = async (order: OrderModel) => {
    const response = await api.post<OrderModel>(`events`, order);
    return response.data;
}

export const authMe = async (user_data: AuthInput) => {
    const response = await api.get<UserModel[]>(`/auth/me`, { params: user_data });
    return response.data;
}

// espor