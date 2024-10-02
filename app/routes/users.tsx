import { Outlet } from "@remix-run/react";
import {
  Drawer,
  HeaderAvatarMenu,
  NavigationTrail,
  SearchBar,
  Sidebar,
} from "~/features/post";
import PostContextProvider from "~/features/post/components/PostContextProvider";

export default function UsersLayout() {
  console.log("🚀 ~ UsersLayout");
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      {/* SIDEBAR */}
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          {/* DRAWER */}
          <Drawer />

          {/* BREADCRUMB */}
          <NavigationTrail />

          {/* SEARCH BAR */}
          <SearchBar />

          {/* AVATAR MENU */}
          <HeaderAvatarMenu />
        </header>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <PostContextProvider>
            <Outlet />
          </PostContextProvider>
        </main>
      </div>
    </div>
  );
}
