import React from "react";
import { Link } from "@remix-run/react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "~/components/_shadcn/ui/sheet";
import { Button } from "~/components/_shadcn/ui/button";
import TheLogo from "./TheLogo";
import DrawerMenu from "./DrawerMenu";
import UpgradeCard from "./cards/UpgradeCard";
// ///////////////////////////////////////////////
import { APP } from "~/constants/APP";

const Drawer: React.FC = () => {
  console.log("🚀 ~ Drawer");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <MenuIcon className="dim-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            to="#"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <TheLogo />
            <span className="sr-only">{APP.short_name}</span>
          </Link>

          {/* MENU */}
          <DrawerMenu />
        </nav>

        {/* UPGRADE */}
        <section className="mt-auto">
          <UpgradeCard />
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(Drawer);
