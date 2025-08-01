import type { User } from "./user";

export interface Task {
  id: string;
  title: string;
  description: string;
  date: string;
  place: string;
  deadline: string;
  assigned_employee: User[];
  assigned_client: string;
  priority: "low" | "medium" | "high";
  status: "completed" | "in progress" | "canceled";
}
