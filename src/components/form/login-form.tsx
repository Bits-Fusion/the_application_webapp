import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { login } from "@/lib/auth";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import React from "react";
import { useAuthStore } from "@/store/useAuthStore";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <small className="text-destructive">{field.state.meta.errors.join(",")}</small>
      ) : null}
    </>
  );
}

interface LoginFormProps extends ComponentProps<"form"> {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export function LoginForm({ className, setShowLogin, ...props }: LoginFormProps) {
  const navigate = useNavigate();
  const setAuth = useAuthStore.getState().setAuth;

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      try {
        const response = await login(value.email, value.password);
        setAuth(response.token, response.user);
        toast.success(`Welcome back ${response.user?.username || ""}`);
        navigate({ to: "/dashboard" });
      } catch (error: unknown) {
        console.error("Error at loggin form", error);
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("Something went wrong");
        }
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
            onChange: ({ value }) => (!value ? "Password is required" : undefined),
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
                    <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
                      Forgot your password?
                    </a>
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
        <Button type="submit" onClick={() => console.log("clicked")} className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Button
          onClick={() => setShowLogin(!setShowLogin)}
          className=" px-0 underline underline-offset-4"
          variant="link"
        >
          Sign up
        </Button>
      </div>
    </form>
  );
}
