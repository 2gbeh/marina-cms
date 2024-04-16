import PATH from "@/constants/PATH";

enum EVariant {
  FOCUS = "focus",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export const styles = {
  link: {
    [EVariant.FOCUS]:
      "flex items-center gap-4 px-2.5 text-foreground",
    [EVariant.ACTIVE]:
      "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
    [EVariant.DISABLED]:
      "flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
  },
};

export const menu = [
  {
    variant: EVariant.FOCUS,
    text: "Dashboard",
    href: PATH.dashboard,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    text: "Orders",
    href: PATH.orders,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    text: "Products",
    href: PATH.products,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    text: "Customers",
    href: PATH.customers,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    text: "Employees",
    href: PATH.employees,
    visible: true,
  },
  {
    variant: EVariant.ACTIVE,
    text: "Settings",
    href: PATH.settings,
    visible: true,
  },
];