export class StringHelper {
  static capitalize = (x: unknown, strict = false) =>
    strict
      ? (x as string)
          .toString()
          .toLowerCase()
          .replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase())
      : (x as string)
          .toString()
          .replace(/(^\w{1})|(\s+\w{1})/g, (char) => char.toUpperCase());

  static search = (str: unknown, substr: unknown) => {
    let [x, y] = [str as string, substr as string];
    return x.search(new RegExp(y, "i")) > -1;
  };

  static mask = (str: unknown, top = 3, tip = 3) => {
    let x = str as string;
    let y = x.trim();
    let start = y.slice(0, top);
    let end = y.slice(tip * -1);
    let padding = y.length - top - tip + 1;
    //
    let masked = Array(padding).join("*");
    return start + masked + end;
  };

  static truncate = (str: unknown, len = 160) => {
    let x = str as string;
    return x.length > len ? x.slice(0, len - 3) + "..." : str;
  };

  static slug = (str: unknown) => {
    let x = str as string;
    return x.replace(/\s+/g, "-").toLocaleLowerCase();
  };

  static unslug = (str: unknown) => {
    let x = str as string;
    return x.replaceAll("-", " ");
  };

  // TE | E.O.
  static initials = (str: unknown, dotted = false) => {
    let x = str as string;
    return dotted
      ? x
          .split(" ")
          .map((e) => e[0])
          .join(".")
          .slice(0, 3) + "."
      : x
          .split(" ")
          .map((e) => e[0])
          .join("")
          .slice(0, 2);
  };

  // J.K. Rowlings | M. Zuckerberg
  static authorInitials = (...args: Array<string>) => {
    if (args.length > 1) {
      let res = "";
      if (args.length === 2) {
        let [firstName, lastName] = args;
        res = firstName[0] + ". " + lastName;
      } else {
        let [firstName, middleName, lastName] = args;
        let initials = this.initials(firstName + " " + middleName, true);
        res = initials + " " + lastName;
      }
      return res;
    }
    //
    return args.join("");
  };
}
