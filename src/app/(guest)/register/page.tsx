import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
//
import {
  _Heading,
  _SubmitButton,
  _OAuthButton,
  _Navigation,
} from "../_guest/partials";

export const metadata = { title: "Register" };

export default function Register() {
  return (
    <>
      <_Heading alt />
      {/*  */}
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="" required />
            </div>
          </div>
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
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          {/*  */}
          <_SubmitButton alt />
          {/*  */}
          <_OAuthButton alt />
        </div>
        {/*  */}
        <_Navigation alt />
      </CardContent>
    </>
  );
}
