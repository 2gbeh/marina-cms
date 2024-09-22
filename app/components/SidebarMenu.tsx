import React from "react";
import { NavLink } from "@remix-run/react";
import {
  FcAssistant,
  FcContacts,
  FcDonate,
  FcLowPriority,
} from "react-icons/fc";
import {
  HomeIcon,
  HandCoinsIcon,
  UsersIcon,
  CreditCardIcon,
  LineChartIcon,
} from "lucide-react";

import { Badge } from "~/components/_shadcn/ui/badge";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";

const SidebarMenu: React.FC = () => {
  console.log("🚀 ~ SidebarMenu");
  const iconProps = { className: "dim-4" };
  // renders
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {[
        {
          menu: "Dashboard",
          path: PATH.dashboard,
          icon: <HomeIcon {...iconProps} />,
        },
        {
          menu: "Collectors",
          path: PATH.collectors,
          icon: <HandCoinsIcon {...iconProps} />,
        },
        {
          menu: "Customers",
          path: PATH.customers,
          icon: <UsersIcon {...iconProps} />,
          badge: "5?Today",
        },
        {
          menu: "Transactions",
          path: PATH.transactions,
          icon: <CreditCardIcon {...iconProps} />,
          badge: "22?Today",
        },
        {
          menu: "Analytics",
          path: PATH.analytics,
          icon: <LineChartIcon {...iconProps} />,
          new: true,
        },
      ].map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              : "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          }
        >
          {item.icon}
          {item.menu}
          {item.badge ? (
            <Badge
              variant="secondary"
              title={item.badge.split("?").pop()}
              className="flex-center-center dim-6 ml-auto shrink-0 rounded-full"
            >
              {item.badge.split("?").shift()}
            </Badge>
          ) : null}
          {item.new && (
            <div className="flex-center-center ml-auto rounded-full bg-red-100 px-1.5 py-0.5 text-xs text-red-500">
              New
            </div>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default React.memo(SidebarMenu);
