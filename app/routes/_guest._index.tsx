import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Label } from "~/components/_shadcn/ui/label";
import { Input } from "~/components/_shadcn/ui/input";
import { Button } from "~/components/_shadcn/ui/button";
// ///////////////////////////////////////////////
import { APP } from "~/constants/APP";
import { PATH } from "~/constants/PATH";
import { AuthHeading } from "~/features/auth";

export const meta: MetaFunction = () => [{ title: "Log in" }];

export default function LoginRoute() {
  console.log("🚀 ~ LoginRoute");
  return (
    <>
      {/* HEADING */}
      <AuthHeading
        title={APP.name}
        subtitle="Enter your login details to access your account"
      />

      {/* FORM */}
      <main className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="Ex. name@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="**** ****"
            required
          />
          <Link
            to={PATH.forgot_password}
            className="ml-auto inline-block text-sm underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* ACTION */}
        <Button type="submit" className="w-full">
          Log in
        </Button>
      </main>
    </>
  );
}
