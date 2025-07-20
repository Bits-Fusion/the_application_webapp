import MinimalLoading from "@/components/loading/minimal";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const token = sessionStorage.getItem("token");
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
