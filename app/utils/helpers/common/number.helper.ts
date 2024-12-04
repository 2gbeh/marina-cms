export class NumberHelper {
  static toMoney = (n: unknown) =>
    n ? Number(n.toString().replaceAll(",", "")).toLocaleString() : 0;

  static random = (from = 0, to = 9) =>
    Math.floor(Math.random() * (to - from + 1)) + from;

  static range = (from: number, to: number) =>
    Array.from({ length: to - from + 1 }, (_, i) => i + from);

  static otp = (size = 4 | 5 | 6) => {
    let [from, to] =
      size === 4
        ? [1000, 9999]
        : size === 5
          ? [10000, 99999]
          : [100000, 999009];
    return Math.floor(Math.random() * (to - from + 1)) + from;
  };
}
