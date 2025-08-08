import type { User } from "./user";

export interface LeadType {
  id: number;
  name: string;
  contact_person: string;
  email: string;
  phone_number: string;
  company: string;
  address: string;
  stage: string;
  meeting_date: string; 
  details: string;
  assigned_employee: User[];
  priority: 'low' | 'medium' | 'high';
  reminder: boolean;
  lead_value: number;
  updated_at: string; 
  created_at: string;
}

