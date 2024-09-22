const DAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTH = [
  null,
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ordinalSuffix(i: number) {
  let res = "th";
  Object.entries({
    st: [1, 21, 31],
    nd: [2, 22],
    rd: [3, 23],
  }).map(([nth, arr]) => {
    if (arr.includes(i)) return (res = nth);
  });
  return res;
}

function internetTime(d: Date) {
  let n = d.getUTCMilliseconds();
  let len = n.toString().length;
  return len < 2 ? `00${n}` : len < 3 ? `0${n}` : n;
}

function greeting(datetime?: string | Date) {
  const d = datetime ? new Date(datetime) : new Date();
  const h = d.getHours();
  //
  return h >= 0 && h <= 11 // 11am
    ? "Good morning"
    : h >= 12 && h <= 16 // 4pm
    ? "Good afternoon"
    : h >= 17 && h <= 20 // 8pm
    ? "Good evening"
    : null;
}

export const calendarUtil = {
  DAY,
  MONTH,
  ordinalSuffix,
  internetTime,
  greeting,
};
