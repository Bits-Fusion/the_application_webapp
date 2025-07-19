export const login = async (email: string, password: string) => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }
  console.log(res.json());

  return res.json();
};

export const logout = async () => {
  await fetch("", {
    method: "POST",
    credentials: "include",
  });
};
