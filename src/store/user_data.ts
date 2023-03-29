import { defineStore } from 'pinia'
import { UserModel } from "@/api/types"

export type AuthUser = {
  authUser: UserModel | null;
};

export const useAuthorisationStore = defineStore({
  id: 'auth_user',
  state: () => (
    {
      authUser: null,
    } as AuthUser
  ),
  getters: {},
  actions: {
    setAuthUser(user: UserModel | null) {
      this.authUser = user;
    },
  },
})