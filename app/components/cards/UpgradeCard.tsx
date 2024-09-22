import React from "react";
import clsx from "clsx";
import { RocketIcon, MailIcon } from "lucide-react";
import { Button } from "~/components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/_shadcn/ui/card";

const UpgradeCard: React.FC = () => {
  console.log("🚀 ~ UpgradeCard");
  return (
    <Card x-chunk="dashboard-02-chunk-0">
      <CardHeader className="p-2 pt-0 md:p-4">
        <CardTitle className="flex items-center gap-2">
          <RocketIcon className="dim-5" /> 363 days left
        </CardTitle>
        <CardDescription className="pt-1">
          Domain and hosting service expires on{" "}
          <time
            dateTime="2025-09-19T12:00:00"
            className="inline-block font-bold"
          >
            Fri, Sep 19, 2025.
          </time>
          <ul className={clsx("mt-2 h-1 w-full rounded-full", "bg-green-100")}>
            <li
              className={clsx("h-1 rounded-full", "bg-green-500")}
              style={{ width: "99.4%" }}
            >
              &nbsp;
            </li>
          </ul>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
        <Button size="sm" className="w-full">
          .:: <MailIcon className="mx-1 dim-4" />
          Tech Support
        </Button>
      </CardContent>
    </Card>
  );
};

export default React.memo(UpgradeCard);
