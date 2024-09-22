import { Outlet } from "@remix-run/react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";

export default function AuthLayout() {
  console.log("🚀 ~ AuthLayout");
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        {/* ASIDE */}
        <Sidebar />
      </div>
      <div className="flex flex-col">
        {/* HEADER */}
        <Header />
        
        {/* CHILDREN */}
        <main className="flex flex-1 flex-col lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
