import { Index, createMemo } from "solid-js";
import type { Component } from "solid-js";

import type { CalendarDayType } from "../../../../types/calendar";
import { CalendarDay } from "./CalendarDay";

interface NormalDayProps {
  type: CalendarDayType;
  daysArray: number[];
  today: number;
  activeMonth: number;
  currentMonth: number;
  currentYear: number;
  timelineInDays: number;
}

export const NormalDay: Component<NormalDayProps> = (props) => {
  const buildDaysBuildArray = (): number[] => {
    let buildDaysArray: number[] = [];

    for (let i = 0; i < props.daysArray.length; i++) {
      for (let j = props.today; j < props.today + props.timelineInDays; j++) {
        if (props.daysArray[i] + 1 === j) {
          buildDaysArray.push(j);
        }
      }
    }

    return buildDaysArray;
  };

  const isBuildDayArray = createMemo(() => {
    const buildDaysArray = buildDaysBuildArray();

    const isBuildDayArray = props.daysArray.reduce((acc, cv): boolean[] => {
      let isBuildDay = false;

      for (let i = 0; i < buildDaysArray.length; i++) {
        if (cv + 1 === buildDaysArray[i]) {
          isBuildDay = true;
        }
      }

      if (isBuildDay) {
        acc.push(true);
      } else {
        acc.push(false);
      }

      return acc;
    }, [] as boolean[]);

    return isBuildDayArray;
  });

  return (
    <Index each={props.daysArray}>
      {(_, i) => {
        const isToday = props.today === i + 1;
        let isBuildDay = isBuildDayArray()[i];

        return (
          <CalendarDay
            type={props.type}
            id={i}
            label={i + 1}
            isToday={isToday}
            dayOfWeek={i + 1}
            activeDay={props.today}
            status="blank"
            activeMonth={props.activeMonth}
            currentMonth={props.currentMonth}
            year={props.currentYear}
            isBuildDay={isBuildDay}
          />
        );
      }}
    </Index>
  );
};
