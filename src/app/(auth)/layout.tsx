import React from "react";
//
import { Sidebar } from "@/components/sidebar";
import { AppBar } from "@/components/app-bar";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        {/*  */}
        <Sidebar />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          {/*  */}
          <AppBar />
          {/*  */}
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            {children}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}
