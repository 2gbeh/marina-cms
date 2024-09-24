import { Outlet } from "@remix-run/react";
import Sidebar from "~/components/Sidebar";
import Drawer from "~/components/Drawer";
import SearchBar from "~/components/SearchBar";
import AvatarBurgerMenu from "~/components/AvatarBurgerMenu";

export default function AuthLayout() {
  console.log("🚀 ~ AuthLayout");
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        {/* ASIDE */}
        <Sidebar />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* DRAWER */}
          <Drawer />

          {/* SEARCH */}
          <section className="flex-center-center _bg-red-100 flex-1">
            <div className="bg-red-200_ w-[480px]">
              <SearchBar />
            </div>
          </section>

          {/* AVATAR */}
          <AvatarBurgerMenu />
        </header>

        {/* CHILDREN */}
        <main className="flex flex-1 flex-col lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
