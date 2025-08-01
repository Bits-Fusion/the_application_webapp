import { useTasks } from "@/queries/fetch-tasks";
import StatsCard from "../ui/shared/stats-card";

const DashboardIndex = () => {
  const { data: tasks } = useTasks();
  return (
    <div className="flex flex-1 flex-col gap-4 p-2 pt-2 min-h-screen">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <StatsCard
          title="Tasks"
          value={tasks?.length || 0}
          description="Your tasks"
          link={`/tasks`}
        />
      </div>
      <div className="grid auto-rows-min gap-4 lg:grid-cols-2 ">
        <div className="bg-muted/50  min-h-80 rounded-xl " />
        <div className="bg-muted/50 min-h-80 rounded-xl " />
      </div>
    </div>
  );
};

export default DashboardIndex;
