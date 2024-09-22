export type TArrayList = unknown[];
export type THashMap = Record<string | number, unknown>;

export class ArrayListHelper {
  static intSort(list: Array<number>, asc = true) {
    return asc
      ? list.toSorted((a: number, b: number) => a - b)
      : list.toSorted((a: number, b: number) => b - a);
  }

  static strSort(list: Array<string>, asc = true) {
    return asc ? list.toSorted() : list.toSorted().toReversed();
  }

  static toValueLabel(options: TArrayList, ordered = false) {
    return options.map((option, i) => ({
      value: ordered ? `${i + 1}` : option,
      label: option,
    }));
  }
}
