import MinimalLoading from "@/components/loading/minimal";
import { createFileRoute, redirect } from "@tanstack/react-router";
import Cookies from "js-cookie";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const token = Cookies.get("token");
    if (!token) {
      throw redirect({
        to: "/login",
        replace: true,
      });
    } else {
      throw redirect({ to: "/dashboard", replace: true });
    }
  },
  component: MinimalLoading,
});
