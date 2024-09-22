// https://www.w3schools.com/php/func_date_date_format.asp
import { calendarUtil as _ } from "./calendar.util";

type TDatetime = null | string | Date;

export class CalendarHelper {
  datetime: string;
  timestamp: Date;
  as: string;

  constructor(datetime?: TDatetime, as = "M j, Y") {
    // 1992-09-15T12:00:00.000Z
    this.datetime = datetime
      ? new Date(datetime).toJSON()
      : new Date().toJSON();
    // Tue Sep 15 1992 12:00:00 GMT+0100 (West Africa Standard Time)
    this.timestamp = new Date(this.datetime);
    // Sep 15, 1992
    this.as = as;
  }

  get format() {
    let res = "";
    const [obj, arr] = [this.transform(), this.as.split("")];
    arr.map((e) => (res += obj?.[e] || e));
    return res;
  }

  private transform() {
    const obj: Record<string, unknown> = {};
    obj.Y = this.datetime.slice(0, 4); // YYYY
    obj.y = this.datetime.slice(2, 4); // YY
    obj.m = this.datetime.slice(5, 7); // 01-12
    obj.n = Number(obj.m); // 1-12
    obj.M = _.MONTH[obj.n as number]?.slice(0, 3); // Jan-Dec
    obj.F = _.MONTH[obj.n as number]; // January-December
    obj.d = this.datetime.slice(8, 10); // 01-31
    obj.j = Number(obj.d); // 1-31
    obj.w = this.timestamp.getDay(); // 0(Sun)-6(Sat)
    obj.N = (obj.w as number) < 1 ? 7 : obj.w; // 1(Mon)-7(Sun) .::ISO-8601
    obj.D = _.DAY[obj.w as number].slice(0, 3); // Sun-Sat
    obj.l = _.DAY[obj.w as number]; // Saturday-Saturday .::lowercase 'L'
    obj.S = _.ordinalSuffix(obj.j as number); // st, nd, rd or th
    // ///////////////////////////////////////////////////////////
    obj.H = this.datetime.slice(11, 13) || "00"; // 24-hours 00-23
    obj.G = Number(obj.H); // 0-23
    obj.g = this.timestamp.toLocaleTimeString().split(":").shift(); // 1-12
    obj.h = (obj.g as number) < 10 ? "0" + obj.g : obj.g; // 12-hours 01-12
    obj.i = this.datetime.slice(14, 16) || "00"; // minutes 00-59
    obj.s = this.datetime.slice(17, 19) || "00"; // seconds 00-59
    obj.A = this.timestamp.toLocaleTimeString().slice(-2); // AM|PM
    obj.a = obj.A?.toString().toLowerCase(); // am|pm
    // ///////////////////////////////////////////////////////////
    obj.U = Date.now() / 1000; // seconds since 1970-01-01
    obj.u = Date.now() * 1000; // Microseconds (added in PHP 5.2.2)
    obj.B = _.internetTime(this.timestamp); // Swatch Internet time (000 to 999)
    obj.P = this.timestamp.getTimezoneOffset(); // Timezone offset in minutes
    obj.Z = this.timestamp.getTimezoneOffset() * 60; // Timezone offset in seconds (-43200 to 50400)
    obj.O = this.timestamp.getTimezoneOffset() / 60; // Timezone offset in hours (+0100)
    obj.e = this.timestamp.toUTCString().split(" ").pop(); // UTC, GMT, Atlantic/Azores .::timezone identifier
    // 
    return obj;
  }
}
