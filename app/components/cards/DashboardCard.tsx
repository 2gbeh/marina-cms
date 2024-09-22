import React, { PropsWithChildren } from "react";
import { ArrowDownRightIcon, ArrowUpLeftIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/_shadcn/ui/card";

interface IProps extends PropsWithChildren {
  label: string;
  value: number | string;
  summary?: string;
  positive?: boolean;
}

const DashboardCard: React.FC<IProps> = ({
  children,
  label,
  value,
  summary,
  positive,
}) => {
  console.log("🚀 ~ DashboardCard");
  return (
    <Card x-chunk="dashboard-01-chunk-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{label}</CardTitle>
        {children}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {summary ? (
          <p className="flex-center mt-1 gap-1 text-xs text-muted-foreground">
            {positive ? (
              <ArrowUpLeftIcon className="dim-4 text-green-500" />
            ) : (
              <ArrowDownRightIcon className="dim-4 text-red-500" />
            )}
            {summary}
          </p>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default React.memo(DashboardCard);
