import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import APP from "@/constants/APP";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: APP.name, template: APP.title },
  description: APP.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
