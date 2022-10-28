import type { ActiveMonth } from "../types/calendar";

const getWorkingDate = (monthIndex: number): Date => {
  const date = new Date();
  const newMonth = date.setMonth(monthIndex);
  const newDate = new Date(newMonth);
  return newDate;
};

export const getCurrentDateElements = (): [ActiveMonth, number, number] => {
  const dateObj = new Date();
  const month = dateObj.getMonth() as ActiveMonth;
  const date = dateObj.getDate();
  const year = dateObj.getFullYear();

  return [month, date, year];
};

export const getTotalDaysInGivenMonth = (month: ActiveMonth): number => {
  const date = new Date();
  const totalDays = new Date(date.getFullYear(), month + 1, 0);
  return totalDays.getDate();
};

export const getTotalDaysArrayInGivenMonth = (month: ActiveMonth) => {
  const totalDays = getTotalDaysInGivenMonth(month);

  let daysArray: number[] = [];

  for (let i = 0; i < totalDays; i++) {
    daysArray = [...daysArray, i];
  }

  return daysArray;
};

export const getBlankDaysAtBeginningOfMonth = (firstDay: number): number[] => {
  const blankDays = [];
  for (let i = 0; i < firstDay; i++) {
    blankDays.push(i);
  }
  return blankDays;
};

export const getFirstDayOfWeekOfMonth = (
  monthIndex: ActiveMonth,
  year: number
): number => {
  const date = getWorkingDate(monthIndex);

  const getCurrentMonthFirstDay = () => {
    const firstDayOfWeekOfCurrentMonth = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    );
    return firstDayOfWeekOfCurrentMonth.getDay();
  };

  if (year < 2020) {
    return getCurrentMonthFirstDay();
  }

  // Get the day for the current year
  const firstDayDateObj = new Date(year, date.getMonth(), 1);

  // gets next months first day... but then pulls back a day with the zero
  const lastDayDateObj = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // getDay returns the index of the day of the week
  const dayOfWeekForFirstDay = firstDayDateObj.getDay();
  const dayOfWeekForLastDay = lastDayDateObj.getDay();

  return dayOfWeekForFirstDay;
};
