import { useQuery } from "@tanstack/react-query";
import BASEURL from "@/constants/base-url";
import type { TaskType } from "@/types/tasks";
import Cookies from "js-cookie";
import axios from "axios";
import { useTasksStore } from "@/stores/tasks-store";

const fetchTasks = async () => {
  try {
    const response = await axios.get(BASEURL + `/task/`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = response.data.tasks;
    useTasksStore.getState().setAllTasks(data);
    return data as TaskType[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
    staleTime: 1000 * 60 * 5,
  });
};
