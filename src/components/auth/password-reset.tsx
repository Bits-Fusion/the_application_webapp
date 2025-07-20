import type React from "react";

import { useState } from "react";
import { ArrowLeft, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "../ui/separator";
import { Link } from "@tanstack/react-router";

interface StepProps {
  step: number;
  currentStep: number;
  title: string;
  description: string;
  isLast: boolean;
}

function Step({ step, currentStep, title, description, isLast }: StepProps) {
  const isActive = step === currentStep;
  const isCompleted = step < currentStep;

  return (
    <>
      <div className="flex flex-col items-center text-center">
        <div
          className={`flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full text-xs md:text-sm font-semibold mb-2 md:mb-3 ${
            isCompleted
              ? "bg-primary text-primary-foreground"
              : isActive
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
          }`}
        >
          {isCompleted ? <Check className="w-3 h-3 md:w-5 md:h-5" /> : step}
        </div>
        <div className="space-y-1">
          <h3
            className={`font-medium text-xs md:text-sm ${
              isActive
                ? "text-foreground"
                : isCompleted
                  ? "text-foreground"
                  : "text-muted-foreground"
            }`}
          >
            {title}
          </h3>
          <p className="text-xs whitespace-nowrap text-muted-foreground hidden sm:block">
            {description}
          </p>
        </div>
      </div>
      {!isLast && (
        <div className="flex-1 mx-2 md:mx-4 relative">
          <div className="">
            <Separator className="w-full" />
            <Separator
              className={`absolute top-0 left-0 w-full ${step < currentStep ? "bg-primary" : "bg-transparent"} transition-colors duration-300`}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default function ForgotPassword() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const steps = [
    {
      step: 1,
      title: "Enter your email",
      description: "We'll send you a verification code",
    },
    {
      step: 2,
      title: "Verify your identity",
      description: "Enter the code from your email",
    },
    {
      step: 3,
      title: "Create new password",
      description: "Choose a strong, secure password",
    },
  ];

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setCurrentStep(2);
    }
  };

  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code) {
      setCurrentStep(3);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password && password === confirmPassword) {
      // Handle password reset completion
      console.log("Password reset completed");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      if (currentStep === 2) setCode("");
      if (currentStep === 3) {
        setPassword("");
        setConfirmPassword("");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <Card className="w-full max-w-5xl bg-transparent shadow-none border-none">
        <CardHeader className="text-center space-y-2">
          <CardTitle className=" flex items-center ">
            <div className="flex items-center justify-center text-left text-muted-foreground whitespace-nowrap">
              <Link to=".." className="flex gap-1">
                <ArrowLeft className="size-4 text-muted-foreground " />
                Go back
              </Link>
            </div>
            <div className="text-2xl font-bold text-center w-full">Reset your password</div>
          </CardTitle>
          <CardDescription className="text-base">
            Follow these simple steps to regain access to your account
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="flex  gap-3  items-center justify-between mx-auto px-4">
            {steps.map((step, index) => (
              <Step
                key={step.step}
                {...step}
                currentStep={currentStep}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>

          <div className=" rounded-lg p-8">
            {currentStep === 1 && (
              <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-2">Enter your email address</h2>
                  <p className="text-muted-foreground">
                    We'll send a verification code to your email
                  </p>
                </div>
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-medium">
                      Email address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-base font-medium">
                    Send verification code
                  </Button>
                </form>
              </div>
            )}

            {currentStep === 2 && (
              <div className="max-w-md mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-2">Check your email</h2>
                  <p className="text-muted-foreground">
                    We sent a 6-digit code to <span className="font-medium">{email}</span>
                  </p>
                </div>
                <form onSubmit={handleCodeSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="code" className="text-base font-medium">
                      Verification code
                    </Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="h-12 text-base text-center tracking-widest"
                      maxLength={6}
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleBack}
                      className="flex-1 h-12 text-base font-medium"
                    >
                      Back
                    </Button>
                    <Button type="submit" className="flex-1 h-12 text-base font-medium">
                      Verify code
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 3 && (
              <div className="max-w-lg mx-auto">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold mb-2">Create new password</h2>
                  <p className="text-muted-foreground">
                    Choose a strong password to secure your account
                  </p>
                </div>
                <form onSubmit={handlePasswordSubmit} className="space-y-6 w-full">
                  <div className="space-y-4 flex gap-5 w-full justify-between">
                    <div className="space-y-3 w-full">
                      <Label htmlFor="password" className="text-base font-medium">
                        New password
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="h-12 w-full text-base"
                        required
                      />
                    </div>
                    <div className="space-y-3 w-full">
                      <Label htmlFor="confirmPassword" className="text-base font-medium">
                        Confirm password
                      </Label>
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="h-12 text-base"
                        required
                      />
                      {password && confirmPassword && password !== confirmPassword && (
                        <p className="text-sm text-destructive">Passwords do not match</p>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={handleBack}
                      className="flex-1 h-12 text-base font-medium"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 h-12 text-base font-medium"
                      disabled={!password || password !== confirmPassword}
                    >
                      Reset password
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
