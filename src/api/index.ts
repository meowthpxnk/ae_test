import { apiAuthResponce, AuthInput } from "./types";
import axios from "axios";
const BASE_URL = 'http://localhost:5000/';

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

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

export const authentificateUser = async (user_auth_data: AuthInput) => {
    const response = await api.post<apiAuthResponce>('authentificate_user', user_auth_data);
    return response.data;
}