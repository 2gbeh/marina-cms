type TPersonSex = "m" | "f";

type TPlanInterval =
  | "daily"
  | "weekly"
  | "bi-weekly"
  | "monthly"
  | "quarterly"
  | "bi-annually"
  | "annually";

export enum ETransactionType {
  CR = "Credit",
  DR = "Debit",
}

export enum ETransactionChannel {
  CASH = "Cash",
  TRANSFER = "TR",
}

type TTransactionStatus = "paid" | "confirmed";

type TPaymentStatus = "pending" | "approved" | "declined" | "critical";

export interface ITransaction {
  id: number | string;
  type: ETransactionType;
  channel: ETransactionChannel;
  amount: number;
  status: string | TTransactionStatus;
  created_at: string | Date;
  collector: {
    name: string;
    sex?: null | TPersonSex;
    email?: null | string;
    phone?: null | string;
    address?: null | string;
  };
  customer: {
    name: string;
    sex?: null | TPersonSex;
    email?: null | string;
    phone?: null | string;
    address?: null | string;
    quota: number;
    interval: TPlanInterval;
    wallet: number;
  };
}
