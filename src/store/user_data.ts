import { defineStore } from 'pinia'
import { UserModel } from "@/api/types"
import { useRouter } from 'vue-router';

export type AuthUser = {
    authUser: UserModel | null;
};

export const useUserData = defineStore({
    id: 'user_data',
    state: () => (
        {
            authUser: null,
        } as AuthUser
    ),
    getters: {
        getUserName(state): string {
            if (state.authUser) {
                return state.authUser.name
            }
            throw "Not User"
        },
        isAdmin(state): boolean {
            if (state.authUser) {
                return state.authUser.role === 'ADMIN'
            }
            throw "Not User"
        },
    },
    actions: {
        setAuthUser(user: UserModel) {
            console.log(user)
            this.authUser = user;
        },
        authorisateUser(user: UserModel) {
            const data = {
                user: user.user,
                password: user.password,
            }
            localStorage.setItem('user_data', JSON.stringify(data))
        },
        singOut() {
            localStorage.removeItem('user_data')            
        }
    },
})