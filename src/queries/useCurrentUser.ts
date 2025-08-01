import { useQuery } from "@tanstack/react-query";
import BASEURL from "@/constants/base-url";
const fetchCurrentUser = async () => {
  const res = await fetch(`${BASEURL}v1/auth/signin`, {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Not authenticated");
  }

  return res.json();
};

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
