import type { User } from "@/types/user";
import { create } from "zustand";

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  restoreSession: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
    set({ token, user });
  },
  logout: () => {
    sessionStorage.clear();
    set({ token: null, user: null });
  },
  restoreSession: () => {
    const token = sessionStorage.getItem("token");
    const user = sessionStorage.getItem("user");
    if (token && user) {
      set({ token, user: JSON.parse(user) });
    }
  },
}));
