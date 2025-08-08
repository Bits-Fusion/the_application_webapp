import axios from "axios";
import BASEURL from "@/constants/base-url";
import Cookies from "js-cookie";
import type { LeadType } from "@/types/leads";
import { useQuery } from "@tanstack/react-query";
import { useLeadsStore } from "@/stores/leads-store";

async function fetchLeads() {
  try {
    const response = await axios.get(BASEURL + "/lead/", {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    });
    const data = response.data.leads;
    useLeadsStore.getState().setAllLeads(data);
    return data as LeadType[];
  } catch (error) {
    console.error("Error at fetching leads ", error);
    return [];
  }
}

export const useLeads = () => {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
    staleTime: 1000 * 60 * 5,
  });
};
