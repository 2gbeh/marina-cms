import {
  ETransactionChannel,
  ETransactionType,
} from "~/features/transactions/core/transaction.interface";

export type TDashboardLoader_Summary = Record<
  "collectors" | "customers" | "deposits" | "withdrawals",
  {
    value: number;
    rate: number;
  }
>;

export type TDashboardLoader_Transaction = {
  id: number;
  type: ETransactionType;
  channel: ETransactionChannel;
  amount: number;
  created_at: string | Date;
  collector: {
    name: string;
  };
  customer: {
    name: string;
    quota: number;
    wallet: number;
  };
};

export interface IDashboardLoader {
  summary: TDashboardLoader_Summary;
  transactions: Array<TDashboardLoader_Transaction>;
}
