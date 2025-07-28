import type { User } from "@/types/user";
import { create } from "zustand";

import Cookies from "js-cookie";

interface AuthState {
  token: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  setAuth: (token: string, user: User) => {
    Cookies.set("token", token, {
      expires: 7,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      path: "/",
    });
    set({ token, user: user });
  },
  logout: () => {
    Cookies.remove("token");
    set({ token: null, user: null });
  },
}));

