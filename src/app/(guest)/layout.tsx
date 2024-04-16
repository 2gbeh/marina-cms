import React from "react";
import Image from "next/image";
import { Card } from "@/components/shadcn/ui/card";

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <div className="flex justify-center mt-10 mb-0 sm:hidden">
        <Image
          src="/icon.png"
          alt=""
          className="dark:invert"
          width={80}
          height={80}
          priority
        />
      </div>
      {/*  */}
      <main className="flex items-center justify-center sm:h-screen sm:bg-[#fafafa]">
        <Card className="w-full sm:w-[440px] mx-auto sm:border sm:shadow border-0 shadow-none">
          {children}
        </Card>
      </main>
    </React.Fragment>
  );
}
