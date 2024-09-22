import { DateHelper as D } from "~/utils/helpers/date.helper";
import { PersonHelper as P } from "~/utils/helpers/person.helper";
import { NumberHelper as N } from "~/utils/helpers/common/number.helper";
import { CurrencyHelper } from "~/utils/helpers/common/currency.helper";

import { ITransaction } from "./transaction.interface";

const currencySymbol = CurrencyHelper.currency.naira.symbol;

export class TransactionPipe {
  static transform(data: ITransaction) {
    const computedWallet =
      data.type === "Debit" ? 0 : data.amount * 30;
    return {
      raw: data,
      displayName: P.displayName(data.customer.name),
      type: data.type.toUpperCase(),
      channel: data.channel.toUpperCase(),
      amount: currencySymbol + " " + N.toMoney(data.amount),
      wallet: currencySymbol + " " + N.toMoney(computedWallet),
      collectorName: P.displayName(data.collector.name),
      createdAt: D.transaction(data.created_at),
    };
  }
}
