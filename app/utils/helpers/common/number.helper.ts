export class NumberHelper {
   static toMoney = (x: unknown) =>
    x ? Number(x.toString().replaceAll(",", "")).toLocaleString() : 0;
}
