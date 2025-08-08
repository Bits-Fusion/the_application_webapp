import { useQuery } from "@tanstack/react-query";
import BASEURL from "@/constants/base-url";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/auth-store";

const fetchCurrentUser = async () => {
  try {
    const response = await axios.post(`${BASEURL}/auth/login`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });

    const userData = response.data.user;
    useAuthStore.getState().setAuth(Cookies.get("token")!, userData);
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const useCurrentUser = () =>
  useQuery({
    queryKey: ["currentUser"],
    queryFn: fetchCurrentUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });
