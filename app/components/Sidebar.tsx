import React from "react";
import { Link } from "@remix-run/react";
import TheLogo from "./TheLogo";
import Navigation from "./Navigation";
import UpgradeCard from "./cards/UpgradeCard";
// ///////////////////////////////////////////////
import { APP } from "~/constants/APP";
import { PATH } from "~/constants/PATH";

const Sidebar: React.FC = () => {
  console.log("🚀 ~ Sidebar");
  return (
    <aside className="flex h-full max-h-screen flex-col gap-2">
      {/* LOGO */}
      <section className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <Link
          to={PATH.dashboard}
          className="flex items-center gap-2 font-semibold"
        >
          <TheLogo />
          <span className="">{APP.short_name}</span>
        </Link>
      </section>

      {/* MENU */}
      <section className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <Navigation variant="sidebar" />
        </nav>
      </section>

      {/* UPGRADE */}
      <section className="mt-auto p-4">
        <UpgradeCard />
      </section>
    </aside>
  );
};

export default React.memo(Sidebar);
