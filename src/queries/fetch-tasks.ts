import { useQuery } from "@tanstack/react-query";
import BASEURL from "@/constants/base-url";
import type { TaskType } from "@/types/tasks";
import Cookies from "js-cookie";
import axios from "axios";
import { useTasksStore } from "@/stores/tasks-store";
import { useAuthStore } from "@/stores/auth-store";

const fetchTasks = async () => {
  try {
    const user = useAuthStore.getState().user;

    console.log("is there", user);
    if (user) {
      console.log("user", user);
      const response = await axios.get(BASEURL + `/task/?assigned_to=${user?.id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      const data = response.data.tasks;
      useTasksStore.getState().setAllTasks(data);
      return data as TaskType[];
    }
    console.log("no user");
    return [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });
};
