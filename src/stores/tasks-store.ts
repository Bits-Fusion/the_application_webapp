import { create } from "zustand";
import type { TaskType } from "@/types/tasks";

interface TaskState {
  tasks: TaskType[];
  setAllTasks: (tasks: TaskType[]) => void;
  setTasks: (task: TaskType) => void;
}

export const useTasksStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (task: TaskType) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  setAllTasks: (tasks: TaskType[]) => {
    set({ tasks });
  },
}));
