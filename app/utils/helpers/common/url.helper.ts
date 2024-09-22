export class UrlHelper {
  static queryStr = (query: Record<string, unknown>, path?: string) => {
    let q = Object.entries(query)
      .map(([key, value]) => key + "=" + value)
      .join("&");
    let res = path ? path + "?" + q : q;
    return encodeURI(res);
  };

  static queryObj = (queryStr: string) => {
    let q = queryStr
      .split("#")[0]
      .split("?")[1]
      .replaceAll("=", ":")
      .replaceAll("&", ",");
    let res = JSON.parse("{" + q + "}");
    return res;
  };

  static validImageUri = (uri?: string) => {
    if (!uri) return false;
    else {
      const pattern = new RegExp(
        "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
        "i"
      );
      return pattern.test(uri);
    }
  };
}
