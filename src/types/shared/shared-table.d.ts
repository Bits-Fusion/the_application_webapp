import type { LeadType } from "../leads";

export interface SharedTableTypes {
  title: string;
  tableHeads: { name: string; className: string }[];
  tableRows: LeadType[] | CustomerType[];
}
