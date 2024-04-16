"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shadcn/ui/button";
import { LoadingAlt } from "@/components/loaders/loading-alt";
//
import PATH from "@/constants/PATH";
import { zzz } from "@/utils";

export const GuestSubmitButton = ({ alt }: { alt?: boolean }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  async function handleSubmit() {
    setSubmitting(true);
    await zzz();
    setSubmitting(false);
    router.push(PATH.dashboard);
  }
  //
  return (
    <Button className="w-full" onClick={handleSubmit}>
      {alt ? "Create an account" : "Log in"}
      {submitting && (
        <i className="ml-2">
          <LoadingAlt />
        </i>
      )}
      {/*  */}
    </Button>
  );
};
