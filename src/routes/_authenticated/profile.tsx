import ProfileIndex from "@/featuers/profile/components/profileIndex";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfileIndex,
});
