import { useQuery } from "@tanstack/react-query";
import BASEURL from "@/constants/base-url";
import axios from "axios";
import Cookies from "js-cookie";
import { useAuthStore } from "@/stores/auth-store";
import { jwtDecode } from "jwt-decode";

const logUser = async () => {
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

export const useLogUser = () =>
  useQuery({
    queryKey: ["log-user"],
    queryFn: logUser,
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

const fetchUser = async () => {
  const token = Cookies.get("token");
  const { sub } = jwtDecode(token!);

  try {
    const response = await axios.get(`${BASEURL}/user/${sub}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data.user;
    useAuthStore.getState().setUser(user);
    return user;
  } catch (error) {
    console.log("error at fetching user", error);
    return [];
  }
};
export const useCurentUser = () =>
  useQuery({
    queryKey: ["get-user"],
    queryFn: fetchUser,
    staleTime: 1000 * 5 * 60,
    retry: false,
  });
