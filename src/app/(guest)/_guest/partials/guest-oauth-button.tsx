import Image from "next/image";
import { Button } from "@/components/shadcn/ui/button";

export const GuestOAuthButton = ({ alt }: { alt?: boolean }) => {
  return (
    <Button variant="outline" className="w-full">
      <Image
        src="/images/auth-google.png"
        alt=""
        className="dark:invert mr-2"
        width={16}
        height={16}
        priority
      />
      {alt ? "Sign up" : "Sign in"} with Google
    </Button>
  );
};
