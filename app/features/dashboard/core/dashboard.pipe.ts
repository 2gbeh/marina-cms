import { NumberHelper as N } from "~/utils/helpers/common/number.helper";
import { CurrencyHelper } from "~/utils/helpers/common/currency.helper";

import { fakeDashboardLoader } from "~/data/fake-dashboard-loader";
import { TDashboardLoader_Transaction } from "./dashboard.interface";

type TData = { value: number; rate: number };

const currencySymbol = CurrencyHelper.currency.naira.symbol;

const computeDeposits = () =>
  (fakeDashboardLoader[1] as Array<TDashboardLoader_Transaction>).reduce(
    (T, obj) => (obj.type === "Credit" ? T + obj.amount : T + 0),
    0,
  );

const computeWithdrawals = () =>
  (fakeDashboardLoader[1] as Array<TDashboardLoader_Transaction>).reduce(
    (T, obj) => (obj.type !== "Credit" ? T + obj.amount : T + 0),
    0,
  );

export class DashboardPipe {
  static transform(data: TData, key: string) {
    return {
      collectors: {
        label: "Total Collectors",
        value: N.toMoney(data.value),
        summary: `Up ${data.rate}% from last 30 days`,
      },
      customers: {
        label: "Total Customers",
        value: N.toMoney(data.value),
        summary: `Up ${data.rate}% from last 30 days`,
      },
      deposits: {
        label: "Gross Deposits",
        value: currencySymbol + " " + N.toMoney(computeDeposits() * 30),
        summary: `Up ${data.rate}% from last 30 days`,
      },
      withdrawals: {
        label: "Gross Withdrawals",
        value: currencySymbol + " " + N.toMoney(computeWithdrawals()),
        summary: `Down ${data.rate}% from last 30 days`,
      },
    }[key];
  }
}
