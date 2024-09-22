export type THashMap = Record<string, unknown>;
export type TCollection = Array<THashMap>;

export class CollectionMapHelper {
  static findIndex(data: TCollection, key: string, value: unknown) {
    return data.findIndex((obj) => {
      let x = obj[key] as string;
      let y = value as string;
      return x.trim().toLowerCase() === y.trim().toLowerCase();
    });
  }

  static findIndexById(data: TCollection, value: unknown) {
    return data.findIndex((obj) => {
      let x = obj["id"] as string;
      let y = value as string;
      return x.trim().toLowerCase() === y.trim().toLowerCase();
    });
  }

  // [{id: 1, email: 'person@email.com'}] => {1: {id: 1, email: 'person@email.com'}}
  static normalize(data: TCollection, key = "id") {
    const iCollection = data.reduce((iCollection, obj) => {
      let i = obj[key] as string;
      iCollection[i] = obj;
      return iCollection;
    }, {});
    //
    return iCollection;
  }
}
