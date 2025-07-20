import type { SetStateAction } from "react";
import { useForm, type AnyFieldApi } from "@tanstack/react-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";
import { signUp } from "@/lib/auth";

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <small className="text-destructive">{field.state.meta.errors.join(",")}</small>
      ) : null}
    </>
  );
}

interface SignupFormProp {
  setShowLogin: React.Dispatch<SetStateAction<boolean>>;
}
const SignupForm = ({ setShowLogin }: SignupFormProp) => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      phoneNumber: "",
      firsName: "",
      lastName: "",
    },

    onSubmit: async ({ value }) => {
      try {
        await signUp({
          username: value.userName,
          email: value.email,
          phoneNumber: value.phoneNumber,
          password: value.password,
          firstName: value.firsName,
          lastName: value.lastName,
        });
        toast.success("Welcome back");
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
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className={"flex flex-col gap-6"}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
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
                  <div className="flex-col">
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
              name="userName"
              validators={{
                onChange: ({ value }) => (!value ? "User name is " : undefined),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return value.includes("error") && 'No "error" allowed in username';
                },
              }}
              children={(field) => {
                return (
                  <div className="flex-col">
                    <div className="grid gap-3">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter username"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <form.Field
              name="firsName"
              validators={{
                onChange: ({ value }) => (!value ? "First name is required" : undefined),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return value.includes("error") && 'No "error" allowed in first name';
                },
              }}
              children={(field) => {
                return (
                  <div className="flex-col">
                    <div className="grid gap-3">
                      <Label htmlFor="email">First name</Label>
                      <Input
                        id="firsName"
                        type="text"
                        placeholder="Enter your first name"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
            <form.Field
              name="lastName"
              validators={{
                onChange: ({ value }) => (!value ? "Last name is required " : undefined),
                onChangeAsyncDebounceMs: 500,
                onChangeAsync: async ({ value }) => {
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                  return value.includes("error") && 'No "error" allowed in last name';
                },
              }}
              children={(field) => {
                return (
                  <div className="flex-col">
                    <div className="grid gap-3">
                      <Label htmlFor="username">Last name</Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                    <FieldInfo field={field} />
                  </div>
                );
              }}
            />
          </div>

          <form.Field
            name="phoneNumber"
            validators={{
              onChange: ({ value }) => (!value ? "Phone number is required" : undefined),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes("error") && 'No "error" allowed in phone number';
              },
            }}
            children={(field) => {
              return (
                <div className="flex-col">
                  <div className="grid gap-3">
                    <Label htmlFor="phoneNumber">Phone number</Label>
                    <Input
                      id="phoneNumber"
                      type="text"
                      placeholder="Enter your phone number"
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
              onChange: ({ value }) => (!value ? "Password is required " : undefined),
              onChangeAsyncDebounceMs: 500,
              onChangeAsync: async ({ value }) => {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return value.includes("error") && 'No "error" allowed in Password ';
              },
            }}
            children={(field) => {
              return (
                <div className="flex-col">
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
            Sign up
          </Button>
        </div>
        <div className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Button
            onClick={() => setShowLogin(!setShowLogin)}
            className="px-0 underline underline-offset-4"
            variant="link"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
