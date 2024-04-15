import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <main className="flex items-center justify-center h-screen">{children}</main>
    </React.Fragment>
  );
}
