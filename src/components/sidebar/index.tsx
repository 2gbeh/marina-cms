import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Settings,
  Package,
  ShoppingCart,
  Users,
  UserCogIcon,
} from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
//
import APP from "@/constants/APP";
import PATH from "@/constants/PATH";
import { styles, menu } from "./sidebar.util";

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href={PATH.dashboard}
          title="Home"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
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
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={e.href}
                      className={styles.link[e?.variant || "active"]}
                    >
                      {
                        {
                          Orders: <ShoppingCart className="h-5 w-5" />,
                          Products: <Package className="h-5 w-5" />,
                          Customers: <Users className="h-5 w-5" />,
                          Employees: <UserCogIcon className="h-5 w-5" />,
                        }[e.title]
                      }
                      {/*  */}
                      <span className="sr-only">{e.title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{e.title}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
        )}
      </nav>
      {/*  */}
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={PATH.settings}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};
