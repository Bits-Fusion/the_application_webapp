import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { login } from "@/lib/auth";
import { toast } from "sonner";
import { Link, useNavigate } from "@tanstack/react-router";
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <small className="text-destructive">{field.state.meta.errors.join(",")}</small>
      ) : null}
    </>
  );
}

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const navigate = useNavigate();
  const setAuth = useAuthStore.getState().setAuth;
  const [loading, setLoading] = useState(false);

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        setLoading(true);
        const response = await login(value.email, value.password);
        setAuth(response.token, response.user);
        toast.success(`Welcome back, ${response.user?.username || ""}`);
        navigate({ to: "/dashboard" });
      } catch (error: unknown) {
        console.error("Error at loggin form", error);
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <form.Field
          name="email"
          validators={{
            onChange: ({ value }) => (!value ? "Email is required" : undefined),
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && 'No "error" allowed in email';
            },
          }}
          children={(field) => {
            return (
              <div className="flex-col gap-1">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
                <FieldInfo field={field} />
              </div>
            );
          }}
        />
        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value
                ? "Password is required"
                : value.length < 6
                  ? "Password must be greater than 6 characters"
                  : undefined,
            onChangeAsyncDebounceMs: 500,
            onChangeAsync: async ({ value }) => {
              await new Promise((resolve) => setTimeout(resolve, 1000));
              return value.includes("error") && 'No "error" allowed in Password ';
            },
          }}
          children={(field) => {
            return (
              <div className="flex-col gap-1">
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/password-reset"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    autoComplete="off"
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                  />
                </div>

                <FieldInfo field={field} />
              </div>
            );
          }}
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <LoaderCircle className="size-4 animate-spin" /> : "Login"}
        </Button>
      </div>
    </form>
  );
}
