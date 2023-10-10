import { defineStore } from 'pinia'
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { OrganizerItem } from '@/type'

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as unknown as string | null,
    user: null as unknown as OrganizerItem | null
  }),
  getters: {
    currentUserName(): string {
      return this.user?.organizationName || ''
    }
  },
  actions: {
    login(email: string, password: string) {
      return apiClient
        .post('/api/v1/auth/authenticate', {
          username: email,
          password: password
        })
        .then((response) => {
          this.token = response.data.access_token
          console.log(response.data.user)
          this.user = {
            id: response.data.user.id,
            organizationName: response.data.user.organizationName,
            address: response.data.user.address,
            images: response.data.user.images,
            roles: response.data.user.roles
          } as OrganizerItem
          localStorage.setItem('access_token', this.token as string)
          localStorage.setItem('user', JSON.stringify(this.user))
          return response
        })
    },
    logout() {
      console.log('Logged out')
      this.token = null
      this.user = null
      localStorage.removeItem('access_token')
      localStorage.removeItem('user')
    },
    reload(token: string, user: OrganizerItem) {
      this.token = token
      this.user = user
    },
    isAdmin(): boolean {
      if (this.user) {
        return !!this.user?.roles.includes('ROLE_ADMIN')
      } else {
        return false
      }
    },
    register(
      email: string,
      password: string,
      username: string,
      firstname: string,
      lastname: string
    ) {
      return apiClient
        .post('/api/v1/auth/register', {
          username,
          email,
          password,
          firstname,
          lastname
        })
        .then((response) => {
          this.token = response.data.access_token
          console.log(response.data.user)
          this.user = {
            id: response.data.user.id,
            organizationName: response.data.user.organizationName,
            address: response.data.user.address,
            images: response.data.user.images,
            roles: response.data.user.roles
          } as OrganizerItem
          localStorage.setItem('access_token', this.token as string)
          localStorage.setItem('user', JSON.stringify(this.user))
          return response
        })
    }
  }
})
