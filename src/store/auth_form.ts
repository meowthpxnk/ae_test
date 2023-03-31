import { defineStore } from 'pinia'

import { authMe } from '@/api'

import { useUserData } from './user_data'

const user_data_store = useUserData()

interface ValidateReq {
  min_length: boolean,
  max_length: boolean,
  required: boolean,
}

export type FormData = {
  password: {
    value: string,
    errors_list: ValidateReq
  },
  username: {
    value: string,
    errors_list: ValidateReq
  },

  auth_error: boolean,
};

export const useAuthorisationStore = defineStore({
  id: 'auth_user',
  state: () => (
    {
      password: {
        value: '',
        errors_list: {
          min_length: true,
          max_length: true,
          required: true,
        }
      },
      username: {
        value: '',
        errors_list: {
          min_length: true,
          max_length: true,
          required: true,
        }
      },

      auth_error: false,
    } as FormData
  ),
  getters: {
    isInvalidForm() {
      const flags: boolean[] = []

      for (const key of Object.keys(this.username.errors_list)) {
        flags.push(this.username.errors_list[key as keyof ValidateReq])
      }

      for (const key of Object.keys(this.password.errors_list)) {
        flags.push(this.password.errors_list[key as keyof ValidateReq])
      }

      return !flags.every(key => key === false)

    },

    isAuthError(state): boolean {
      return state.auth_error
    }

  },
  actions: {
    changePassword(password: string, errors_list: ValidateReq) {
      this.password.value = password;
      this.password.errors_list = errors_list;
    },
    changeUsername(username: string, errors_list: ValidateReq) {
      this.username.value = username;
      this.username.errors_list = errors_list;
    },

    disableAuthError() {
      this.auth_error = false
    },

    async autorisateUser() {
      try {
        const user = await authMe({ user: this.username.value, password: this.password.value }).then(user => {
          console.log(user)
          const user_data = user[0]
          if (!user_data){
            this.auth_error = true

            return false
          } else {
            user_data_store.setAuthUser(user_data)
            user_data_store.authorisateUser(user_data)

            return true
          }
        })
      } catch (e) {
        throw "Error"
        this.auth_error = true
      }
    },
  },
})