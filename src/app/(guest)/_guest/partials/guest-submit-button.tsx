"use client";

import { Button } from "@/components/shadcn/ui/button";
import { useRouter } from "next/navigation";
import PATH from "@/constants/PATH";

export const GuestSubmitButton = ({ alt }: { alt?: boolean }) => {
  const router = useRouter();
  // 
  return (
    <Button
      className="w-full"
      onClick={() => router.push(PATH.dashboard)}
    >
      {alt ? "Create an account" : "Log in"}
    </Button>
  );
};
