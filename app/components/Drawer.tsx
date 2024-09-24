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
import Navigation from "./Navigation";
import UpgradeCard from "./cards/UpgradeCard";
// ///////////////////////////////////////////////
import { APP } from "~/constants/APP";
import { PATH } from "~/constants/PATH";

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
        <div className="grid gap-5 text-lg font-medium">
          <div>
            <Link
              to={PATH.dashboard}
              className="font-semibol bg-red-100_ text-lg"
            >
              <TheLogo />
              <span className="sr-only">{APP.short_name}</span>
            </Link>
          </div>

          {/* MENU */}
          <nav className="flex flex-col gap-2">
            <Navigation variant="drawer" />
          </nav>
        </div>

        {/* UPGRADE */}
        <section className="mt-auto">
          <UpgradeCard />
        </section>
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(Drawer);
