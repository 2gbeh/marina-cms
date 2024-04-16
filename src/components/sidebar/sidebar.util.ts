import PATH from "@/constants/PATH";

enum EVariant {
  FOCUS = "focus",
  ACTIVE = "active",
  DISABLED = "disabled",
}

export const styles = {
  link: {
    [EVariant.FOCUS]:
      "flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
    [EVariant.ACTIVE]:
      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
    [EVariant.DISABLED]:
      "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
  },
};

export const menu = [
  {
    variant: EVariant.ACTIVE,
    title: "Dashboard",
    href: PATH.dashboard,
    visible: false,
  },
  {
    variant: EVariant.FOCUS,
    title: "Orders",
    href: PATH.orders,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Products",
    href: PATH.products,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Customers",
    href: PATH.customers,
    visible: true,
  },
  {
    variant: EVariant.DISABLED,
    title: "Employees",
    href: PATH.employees,
    visible: true,
  },
];