import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRightIcon } from "lucide-react";
import clsx from "clsx";
import { Button } from "~/components/_shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/_shadcn/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "~/components/_shadcn/ui/table";
import { Badge } from "~/components/_shadcn/ui/badge";
import Figure from "~/components/Figure";
// ///////////////////////////////////////////////
import { PATH } from "~/constants/PATH";
import { TransactionPipe } from "~/features/transactions";
import { TDashboardLoader_Transaction } from "../core/dashboard.interface";

interface IProps {
  data: Array<TDashboardLoader_Transaction>;
}

const DashboardTable: React.FC<IProps> = ({ data }) => {
  console.log("🚀 ~ DashboardTable");
  return (
    <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Showing most recent transactions</CardDescription>
        </div>
        <Button asChild size="sm" className="ml-auto gap-1">
          <Link to={PATH.customers}>
            View All
            <ArrowUpRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer Name</TableHead>
              <TableHead className="_text-right">Channel</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Wallet Balance</TableHead>
              <TableHead>Collector</TableHead>
              <TableHead>Date | Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, i) => {
              //  @ts-ignore
              const pipe = TransactionPipe.transform(item);
              return (
                <TableRow key={item.id}>
                  <TableCell className="">
                    <Figure title={pipe.displayName} />
                  </TableCell>
                  <TableCell className="_text-right">
                    <Badge className="text-xs" variant="outline">
                      {pipe.channel}
                    </Badge>
                  </TableCell>
                  <TableCell
                    className={clsx(
                      "font-medium",
                      pipe.raw.type === "Credit" ? "text-blue-600" : "text-red-600",
                    )}
                  >
                    {pipe.amount}
                  </TableCell>
                  <TableCell className="font-medium">{pipe.wallet}</TableCell>
                  <TableCell className="uppercase">{pipe.collectorName}</TableCell>
                  <TableCell className="">{pipe.createdAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default React.memo(DashboardTable);
