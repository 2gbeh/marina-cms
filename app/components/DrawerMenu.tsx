import React from "react";
import { NavLink } from "@remix-run/react";
import {
  CreditCardIcon,
  HandCoinsIcon,
  HomeIcon,
  LineChartIcon,
  UsersIcon,
} from "lucide-react";
import { Badge } from "~/components/_shadcn/ui/badge";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";

const DrawerMenu: React.FC = () => {
  console.log("🚀 ~ DrawerMenu");
  return [
    {
      menu: "Dashboard",
      path: PATH.dashboard,
      icon: <HomeIcon className="dim-5" />,
    },
    {
      menu: "Collectors",
      path: PATH.nil,
      icon: <HandCoinsIcon className="dim-5" />,
    },
    {
      menu: "Customers",
      path: PATH.nil,
      icon: <UsersIcon className="dim-5" />,
      badge: "15?Today",
    },
    {
      menu: "Transactions",
      path: PATH.nil,
      icon: <CreditCardIcon className="dim-5" />,
    },
    {
      menu: "Analytics",
      path: PATH.nil,
      icon: <LineChartIcon className="dim-5" />,
    },
  ].map((item, i) => (
    <NavLink
      key={i}
      to={item.path}
      className={({ isActive }) =>
        isActive
          ? "mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
          : "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
      }
    >
      {item.icon}
      {item.menu}
      {item.badge ? (
        <Badge
          variant="destructive"
          title={item.badge.split("?").pop()}
          className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        >
          {item.badge.split("?").shift()}
        </Badge>
      ) : null}
    </NavLink>
  ));
};

export default React.memo(DrawerMenu);
