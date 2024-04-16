import Link from "next/link";
import { CardContent } from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
//
import PATH from "@/constants/PATH";
import {
  _Heading,
  _SubmitButton,
  _OAuthButton,
  _Navigation,
} from "./_guest/partials";

export default function Login() {
  return (
    <>
      <_Heading />
      {/*  */}
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="example@domain.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link
                href={PATH.forgot_password}
                className="ml-auto inline-block text-sm underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          {/*  */}
          <_SubmitButton />
          {/*  */}
          <_OAuthButton />
        </div>
        {/*  */}
        <_Navigation />
      </CardContent>
    </>
  );
}
