import React from "react";
import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import {
  HomeIcon,
  HandCoinsIcon,
  UsersIcon,
  CreditCardIcon,
  LineChartIcon,
  CctvIcon,
  HandshakeIcon,
} from "lucide-react";
import { Badge } from "~/components/_shadcn/ui/badge";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";

interface IProps {
  variant: "sidebar" | "drawer";
}

const Navigation: React.FC<IProps> = ({ variant }) => {
  console.log("🚀 ~ Navigation");
  // variantProps
  const _ = {
    sidebar: {
      iconProps: { className: "dim-4" },
      menuStyles: { active: "sidebar-active", inactive: "sidebar-inactive" },
      infoStyles: "dim-6",
      badgeStyles: "px-1.5 py-0.5 text-xs",
    },
    drawer: {
      iconProps: { className: "dim-5" },
      menuStyles: { active: "drawer-active", inactive: "drawer-inactive" },
      infoStyles: "dim-8",
      badgeStyles: "px-2.5 py-1 text-sm",
    },
  }[variant];
  // renders
  return [
    {
      menu: "Dashboard",
      path: PATH.dashboard,
      icon: <HomeIcon {..._.iconProps} />,
    },
    {
      menu: "Collectors",
      path: PATH.collectors,
      icon: <HandshakeIcon {..._.iconProps} />,
    },
    {
      menu: "Customers",
      path: PATH.customers,
      icon: <UsersIcon {..._.iconProps} />,
      info: "5?Today",
    },
    {
      menu: "Transactions",
      path: PATH.transactions,
      icon: <CreditCardIcon {..._.iconProps} />,
      info: "22?Today",
    },
    {
      menu: "Analytics",
      path: PATH.analytics,
      icon: <LineChartIcon {..._.iconProps} />,
    },
    {
      menu: "Activity Logs",
      path: PATH.activities,
      icon: <CctvIcon {..._.iconProps} />,
      badge: true,
    },
  ].map((item, i) => (
    <NavLink
      key={i}
      to={item.path}
      className={({ isActive }) =>
        isActive ? _.menuStyles.active : _.menuStyles.inactive
      }
      end={i < 1}
    >
      {/* ICON */}
      {item.icon}

      {/* MENU ITEM */}
      {item.menu}

      {/* INFO */}
      {item.info ? (
        <Badge
          variant="secondary"
          title={item.info.split("?").pop()}
          className={clsx(
            "flex-center-center dim-6 ml-auto shrink-0 rounded-full",
            _.infoStyles,
          )}
        >
          {item.info.split("?").shift()}
        </Badge>
      ) : null}

      {/* BADGE */}
      {item.badge && (
        <div
          className={clsx(
            "flex-center-center ml-auto rounded-full bg-red-100 text-red-500",
            _.badgeStyles,
          )}
        >
          New
        </div>
      )}
    </NavLink>
  ));
};

export default React.memo(Navigation);
