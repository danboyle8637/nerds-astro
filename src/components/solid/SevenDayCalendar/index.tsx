import { createSignal, onMount } from "solid-js";
import type { Component } from "solid-js";

import { BlankDay } from "./days/BlankDay";
import { NormalDay } from "./days/NormalDay";
import {
  getCurrentDateElements,
  getTotalDaysArrayInGivenMonth,
  getBlankDaysAtBeginningOfMonth,
  getFirstDayOfWeekOfMonth,
} from "../../../utils/calendarFunctions";
import styled from "./SevenDayCalendar.module.css";

interface CalendarProps {
  timelineInDays: number;
}

export const SevenDayCalendar: Component<CalendarProps> = (props) => {
  const [month, day, year] = getCurrentDateElements();
  const [blankDays, setBlankDays] = createSignal<number[]>([]);
  const [daysArray, setDaysArray] = createSignal<number[]>([]);

  const updateBlankDays = (blankDays: number[]) => {
    setBlankDays(blankDays);
  };

  const updateDaysArray = (days: number[]) => {
    setDaysArray(days);
  };

  onMount(() => {
    const firstDay = getFirstDayOfWeekOfMonth(month, year);
    const blankDays = getBlankDaysAtBeginningOfMonth(firstDay);
    const daysArray = getTotalDaysArrayInGivenMonth(month);

    updateBlankDays(blankDays);
    updateDaysArray(daysArray);
  });

  return (
    <div class={styled.container}>
      <div class={styled.days_container}>
        <BlankDay daysArray={blankDays()} />
        <NormalDay
          type="date-picker"
          daysArray={daysArray()}
          today={day}
          activeMonth={month}
          currentMonth={month}
          currentYear={year}
          timelineInDays={props.timelineInDays}
        />
      </div>
    </div>
  );
};
