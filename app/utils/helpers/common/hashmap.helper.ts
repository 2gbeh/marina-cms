export type TArrayList = unknown[];
export type THashMap = Record<string | number, unknown>;

export class HashMapHelper {
  static remove(obj: THashMap, keys: TArrayList) {
    let newObj = {} as typeof obj;
    Object.entries(obj).map(([key, value]) => {
      if (!keys.includes(key)) {
        newObj[key] = value;
      }
    });
    return newObj;
  }

  static toValueLabel(options: THashMap) {
    return Object.entries(options).map(([value, label]) => ({ value, label }));
  }
}
