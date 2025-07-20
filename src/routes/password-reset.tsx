import ForgotPassword from "@/components/auth/password-reset";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/password-reset")({
  component: ForgotPassword,
});
