import type { AuthResponse, signUpProps } from "@/types/auth";

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }

  return await res.json();
};

export const signUp = async ({
  email,
  password,
  username,
  firstName,
  lastName,
  phoneNumber,
}: signUpProps) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, username, phoneNumber, firstName, lastName, password }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Login failed");
  }

  const data = await res.json();
  return data;
};

export const logout = async () => {
  await fetch("", {
    method: "POST",
    credentials: "include",
  });
};
