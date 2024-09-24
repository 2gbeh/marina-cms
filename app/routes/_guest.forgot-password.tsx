import type { MetaFunction } from "@remix-run/node";
import { Label } from "~/components/_shadcn/ui/label";
import { Input } from "~/components/_shadcn/ui/input";
import { Button } from "~/components/_shadcn/ui/button";
// ///////////////////////////////////////////////
import { GuestHeading, GuestNavigation } from "~/features/guest";
import { useState } from "react";

export const meta: MetaFunction = () => [{ title: "Forgot Password" }];

export default function ForgotPasswordRoute() {
  console.log("🚀 ~ ForgotPasswordRoute");
  const [counter, setCounter] = useState(0);
  // renders
  return (
    <>
      {/* HEADING */}
      <GuestHeading
        title="Forgot Password"
        subtitle="Enter your email to receive your password reset link"
      />

      {/* FORM */}
      <main className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Ex. name@example.com"
            required
          />
        </div>

        {/* ACTION */}
        <Button
          type="button"
          onClick={() => setCounter((prev) => prev + 1)}
          className="w-full"
        >
          Send
        </Button>
      </main>

      {/* NAV */}
      <GuestNavigation />
    </>
  );
}
