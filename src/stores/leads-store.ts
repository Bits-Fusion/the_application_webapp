import { create } from "zustand";
import type { LeadType } from "@/types/leads";

interface LeadState {
  leads: LeadType[];
  setleads: (lead: LeadType) => void;
  setAllLeads: (leads: LeadType[]) => void;
}

export const useLeadsStore = create<LeadState>((set) => ({
  leads: [],
  setleads: (lead: LeadType) => {
    set((state) => ({ leads: [...state.leads, lead] }));
  },
  setAllLeads: (leads: LeadType[]) => set({ leads }),
}));
