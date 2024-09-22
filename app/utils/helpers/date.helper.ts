import { CalendarHelper } from "../calendar/calendar.helper";

export class DateHelper {
  private static format = (datetime: string | Date, as = "M j") =>
    new CalendarHelper(datetime, as).format;

  // Fri, Jun 23 | 2:15 PM
  static transaction = (datetime: string | Date) =>
    this.format(datetime, "D, M j | h:i A");
}
