export class DtoHelper {
  static toEntity(
    formData: Record<string, { value: unknown }>,
    keyExtractor: Record<string, string>
  ) {
    const obj: Record<string, unknown> = {};
    let key = "";
    //
    Object.entries(formData).map(([name, { value }]) => {
      key = keyExtractor[name];
      obj[key] = value;
    });
    //
    return obj;
  }

  static fromEntity(data: unknown, keyExtractor: Record<string, string>) {
    const res = data as Record<string, unknown>;
    const obj: Record<string, unknown> = {};
    let key = "";
    //
    Object.entries(res).map(([name, value]) => {
      key = keyExtractor[name];
      obj[key] = value;
    });
    //
    return obj;
  }
}
