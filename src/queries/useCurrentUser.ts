import { useQuery } from "@tanstack/react-query";

const fetchCurrentUser = async () => {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}v1/auth/signin`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  console.log(res.json());
  return res.json();
};

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
