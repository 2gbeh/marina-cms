## DateHelper Docs

#### Usage
```js
import { df } from "@/utils/helpers/date/date.helper";
// Jan 1, 1970
df();
// Sep 15
df(null, "M j");
// Sep 15, 1992
df("1992-09-15", "M j, Y");
// Tue, Sep 15, 1992
df("1992-09-15 12:00:00", "D, M j, Y");
// 12:00 PM
df("1992-09-15T12:00:00.000Z", "h:i A");
/** {
  date: "2024-07-04",
  time: "00:26:15",
  verbose: {
    date: "Thu, Jul 4, 2024",
    time: "08:26 PM",
    br: "Thu, Jul 4, 2024 <br/> 08:26 PM",
  },
  social: { date: "Jul 4", time: "8:26 PM" },
  locale: "7/4/2024",
} */
df_();
```

#### Examples
```ts
export const DateHelperFormat = (dt?: TDatetime, f?: string) => new DateHelper(dt, f).format;

export const DateHelperVerbose = (dt?: TDatetime) => ({
  date: new DateHelper(dt, "Y-m-d").format,
  time: new DateHelper(dt, "H:i:s").format,
  verbose: {
    date: new DateHelper(dt, "D, M j, Y").format,
    time: new DateHelper(dt, "h:i A").format,
    br: new DateHelper(dt, "D, M j, Y <br/> h:i A").format,
  },
  social: {
    date: new DateHelper(dt, "M j").format,
    time: new DateHelper(dt, "g:i A").format,
  },
  locale: new DateHelper(dt, "n/j/Y").format,
});
```

#### TODO

```
z - The day of the year (from 0 through 365)
W - The ISO-8601 week number of year (weeks starting on Monday)
t - The number of days in the given month
L - Whether it's a leap year (1 if it is a leap year, 0 otherwise)
o - The ISO-8601 year number
I - (capital i) Whether the date is in daylights savings time (1 if Daylight Savings Time, 0 otherwise)
T - Timezone abbreviations (Examples: EST, MDT)
c - The ISO-8601 date (e.g. 2013-05-05T16:34:42+00:00)
r - The RFC 2822 formatted date (e.g. Fri, 12 Apr 2013 12:01:05 +0200)
```

#### Resources

- https://www.w3schools.com/php/func_date_date_format.asp
