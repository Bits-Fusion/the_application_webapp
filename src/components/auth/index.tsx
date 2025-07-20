import { useState } from "react";
import { LoginForm } from "../form/login-form";
import SignupForm from "../form/signup-form";
import { siteConfig } from "@/site.config";

export default function LoginPage() {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              {<siteConfig.logo className="size-4" />}
            </div>
            {siteConfig.name}
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-lg">
            {showLogin ? (
              <LoginForm setShowLogin={setShowLogin} />
            ) : (
              <SignupForm setShowLogin={setShowLogin} />
            )}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.webp"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
