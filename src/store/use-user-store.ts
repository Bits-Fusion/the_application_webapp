import { create } from 'zustand'

export interface User {
  id: string
  username: string
  first_name: string
  is_active: boolean
  last_name: string
  email: string
  phone_number: string
  role: string
}

interface UserState {
  user: User | null
  loading: boolean
  setUser: (user: User | null) => void
  setToken: (token: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => {
    set({ user })
  },
  setToken: (token) => {
    sessionStorage.setItem('token', token)
  },
}))
