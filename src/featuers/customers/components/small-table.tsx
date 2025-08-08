import { SharedTable } from "@/components/ui/shared/shared-table";
import { useLeadsStore } from "@/stores/leads-store";
import { title, tableHeads } from "../data/customers-table.ts";
const CustomersSmallTable = () => {
  const { leads } = useLeadsStore();
  return (
    <div className="h-full">
      <SharedTable title={title} tableHeads={tableHeads} tableRows={leads} />
    </div>
  );
};

export default CustomersSmallTable;
