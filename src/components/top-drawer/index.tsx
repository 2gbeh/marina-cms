import Image from "next/image";
import Link from "next/link";
import {
  PanelLeft,
  Home,
  Settings,
  Package,
  ShoppingCart,
  Users,
  UserCogIcon,
} from "lucide-react";
import { Button } from "@/components/shadcn/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import { styles, menu } from "./top-drawer.util";

export const TopDrawer = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="sm:max-w-xs">
        <nav className="grid gap-6 text-lg font-medium">
          <Link
            href={PATH.dashboard}
            title="Home"
            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
          >
            <Image
              src="/icon.png"
              alt={APP.name}
              className="dark:invert"
              width={160}
              height={160}
              priority
            />
            <span className="sr-only">{APP.name}</span>
          </Link>
          {/*  */}
          {menu.map(
            (e, i) =>
              e?.visible && (
                <Link
                  key={i}
                  href={e.href}
                  className={styles.link[e?.variant || "active"]}
                >
                  {
                    {
                      Dashboard: <Home className="h-5 w-5" />,
                      Orders: <ShoppingCart className="h-5 w-5" />,
                      Products: <Package className="h-5 w-5" />,
                      Customers: <Users className="h-5 w-5" />,
                      Employees: <UserCogIcon className="h-5 w-5" />,
                      Settings: <Settings className="h-5 w-5" />,
                    }[e.text]
                  }
                  {/*  */}
                  {e.text}
                </Link>
              )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};
