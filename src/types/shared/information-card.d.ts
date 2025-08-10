import type { LucideIcon } from "lucide-react";
import type { TablerIcon } from "@tabler/icons-react";
export interface InformationCardType {
  title: string;
  description: string;
  icon: LucideIcon | TablerIcon;
  defaultIcon: LucideIcon | TablerIcon;
}
