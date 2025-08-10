import StatsCard from "../ui/shared/stats-card";
import { useTasksStore } from "@/stores/tasks-store";
import { useLeadsStore } from "@/stores/leads-store";
import { ChartBar } from "../ui/shared/bar-chart";
import CustomersSmallTable from "@/featuers/customers/components/small-table";

const DashboardIndex = () => {
 const { tasks } = useTasksStore();
  const { leads } = useLeadsStore();

  return (
    <div className="flex flex-1 flex-col gap-4 p-2 pt-2 ">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <StatsCard
          title="Customers"
          value={0}
          description="Your customers"
          link={`/customers`}
          className="bg-primary"
        />
        <StatsCard
          title="Leads"
          value={leads?.length || 0}
          description="Your Leads"
          link={`/leads`}
        />
        <StatsCard
          title="Tasks"
          value={tasks?.length || 0}
          description="Your tasks"
          link={`/tasks`}
        />
      </div>
      <div className="grid auto-rows-min gap-4 lg:grid-cols-2 ">
        <ChartBar
          title="Customers"
          from="December"
          to="August 2025"
          change="5.2"
          description="Total customers for the last 6 months"
        />
        <CustomersSmallTable />
      </div>
    </div>
  );
};

export default DashboardIndex;
