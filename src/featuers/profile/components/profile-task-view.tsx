import { Card } from "@/components/ui/card";
import { useTasks } from "@/queries/fetch-tasks";
import { useTasksStore } from "@/stores/tasks-store";
import { useEffect } from "react";

const ProfileTaskView = () => {
  useTasks();
  const { tasks } = useTasksStore();
  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);
  return (
    <div className="h-full p-4">
      <Card></Card>
    </div>
  );
};

export default ProfileTaskView;
