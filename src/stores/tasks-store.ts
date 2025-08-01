import { create } from "zustand";
import type { Task } from "@/types/task";

interface TaskState {
  tasks: Task[];
  setTasks: (task: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  setTasks: (task: Task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
}));
