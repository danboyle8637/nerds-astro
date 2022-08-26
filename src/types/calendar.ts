export type ActiveMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 99;

export type CalendarDayStatus =
  | "active"
  | "complete"
  | "skipped"
  | "blank"
  | "important"
  | "bookmarked"
  | "start-day"
  | "tracked-day";

export interface ImportantDate {
  month: ActiveMonth;
  day: number;
  year: number;
}

export type CalendarDayType =
  | "date-picker"
  | "workout-journal"
  | "training-plan";
