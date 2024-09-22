import React from "react";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import HeaderAvatarMenu from "./HeaderAvatarMenu";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";

const Header: React.FC = () => {
  console.log("🚀 ~ Header");
  return (
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
      <HeaderAvatarMenu />
    </header>
  );
};

export default React.memo(Header);
