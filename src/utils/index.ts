import parse from "html-react-parser";
// const parse = (x: unknown) => x;

type T = string | number;
type TArgs = unknown[];

// naira sign
export const NAIRA = "₦";

// dollar sign
export const DOLLAR = "$";

// check internet status
// export const LIVE = window?.navigator?.onLine;

// number format
export const $ = (n: T, usd = false) =>
  n
    ? usd
      ? Number(
          ((n as number) / 1000).toString().replaceAll(",", ""),
        ).toLocaleString()
      : Number(n.toString().replaceAll(",", "")).toLocaleString()
    : 0;

// react html parser or rich-text escape string
export const __ = (x: string, esc = false) =>
  x ? (esc ? x.replaceAll(/(<([^>]+)>)/gi, "") : parse(x)) : "";

export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");
export const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

// debug in browser
export const dd = (...args: TArgs) =>
  parse(`<pre>${JSON.stringify(args, null, 2)}</pre>`);

// debug in terminal
export const log = (...args: TArgs) => {
  console.log(JSON.stringify(args));
};

// today's date in milliseconds(1693166015389) or ISO (1970-01-01T00:00:00.000Z)
export const now = (toJSON = false) =>
  toJSON ? new Date().toJSON() : Date.now();

// convert any to str
export const str = (x: unknown) =>
  x && typeof x === "object" ? JSON.stringify(x) : x?.toString();

// length of string, number or array
export const len = (x: unknown) =>
  x
    ? Array.isArray(x)
      ? x.length
      : ["string", "number"].includes(typeof x)
        ? x.toString().length
        : 0
    : 0;

// left/right pad string with another string
export const pad = (str: T, x = 3, y = "0") =>
  typeof x === "number"
    ? str.toString().padEnd(x, y)
    : typeof y === "number"
      ? str.toString().padStart(y, x)
      : str;

// await zzz() - mock api request delay
export const zzz = (secs = 3, success = true) =>
  new Promise((resolve) =>
    setTimeout(() => resolve({ status: success ? 200 : 400 }), secs * 1000),
  );

// text transform uppercase
export const caps = (str: T) =>
  str.toString().charAt(0).toUpperCase() + str.toString().slice(1);

// random return value toggle
export const bool = (x: unknown, y: unknown) =>
  x && y ? (Math.random() < 0.5 ? x : y) : Math.random() < 0.5;

// random no. btw x, y both inclusive
export const rand = (x = 0, y = 9, z = 1): number =>
  Math.floor(Math.random() * (y - x + 1)) + x;

// random nos. btw x, y both inclusive
export const rands = (x = 0, y = 9, z = 1): number[] => {
  let arr = [];
  for (let i = 1; i <= z; i++) {
    arr.push(rand(x, y));
  }
  return arr as number[];
};

// mask string
export const mask = (x: T, top = 3, tip = 3) => {
  if (x) {
    let str = x.toString().trim();
    let pad = str.length - top - tip + 1;
    let start = x.toString().slice(0, top);
    let end = x.toString().slice(tip * -1);
    //
    return `${start}${Array(pad).join("*")}${end}`;
  }
  return x;
};

// truncate string
export const wrap = (x: T, len = 160) => {
  let str = x.toString();
  return str.length > len ? str.slice(0, len - 3) + "..." : str;
};

// case-insensitive string search
export const iMatch = (str: T, substr: T) =>
  str.toString().search(new RegExp(substr.toString(), "i")) > -1;

// is defined or replace
export const isset = (...args: TArgs) => {
  switch (args.length) {
    case 2:
      return args[0] ? args[1] : null;
    case 3:
      return args[0] ? args[1] : args[2];
    default:
      return args[0] ? args[0].toString().trim().length > 0 : false;
  }
};

export const abbr = (str: string) =>
  str
    .split(" ")
    .map((e) => e[0])
    .join("")
    .slice(0, 2);

export const sex = (x?: T, fallback: unknown = null) => {
  if (x) {
    if (typeof x === "number") {
      x == 1 ? "M" : x == 2 ? "F" : fallback;
    } else {
      x == "Male" ? "M" : x == "Female" ? "F" : fallback;
    }
  }
};

export const gender = (x?: T, fallback: unknown = null) => {
  if (x) {
    if (typeof x === "number") {
      x == 1 ? "Male" : x == 2 ? "Female" : fallback;
    } else {
      x == "M" ? "Male" : x == "F" ? "Female" : fallback;
    }
  }
};
