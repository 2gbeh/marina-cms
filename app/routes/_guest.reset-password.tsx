import type { MetaFunction } from "@remix-run/node";
import { Label } from "~/components/_shadcn/ui/label";
import { Input } from "~/components/_shadcn/ui/input";
import { Button } from "~/components/_shadcn/ui/button";
// ///////////////////////////////////////////////
import { AuthHeading, AuthNavigation } from "~/features/auth";

export const meta: MetaFunction = () => [{ title: "Reset Password" }];

export default function ResetPasswordRoute() {
  console.log("🚀 ~ ResetPasswordRoute");
  return (
    <>
      {/* HEADING */}
      <AuthHeading
        title="Reset Password"
        subtitle="Create a new secure password to access your account"
      />

      {/* FORM */}
      <main className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter new password"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password_confirmation">Confirm Password</Label>
          <Input
            id="password_confirmation"
            type="password"
            placeholder="Re-type new password"
            required
          />
        </div>

        {/* ACTION */}
        <Button type="submit" className="w-full">
          Save
        </Button>
      </main>

      {/* NAV */}
      <AuthNavigation />
    </>
  );
}
