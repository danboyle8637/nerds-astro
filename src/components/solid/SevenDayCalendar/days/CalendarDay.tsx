import { createMemo } from "solid-js";
import type { Component, JSX } from "solid-js";

import type {
  CalendarDayType,
  CalendarDayStatus,
} from "../../../../types/calendar";
import styled from "./CalendarDay.module.css";

interface CalendarDayProps {
  type: CalendarDayType;
  id: number;
  label: number;
  isToday: boolean;
  dayOfWeek: number;
  activeDay: number;
  status: CalendarDayStatus;
  activeMonth: number;
  currentMonth: number;
  year: number;
  isBuildDay: boolean;
}

export const CalendarDay: Component<CalendarDayProps> = (props) => {
  const styles = createMemo(
    () =>
      ({
        "--day-background":
          props.isToday && props.isBuildDay
            ? "var(--accent-teal)"
            : props.isBuildDay
            ? "var(--accent-pink)"
            : "hsla(218, 29%, 23%, 0.4)",
        "--day-blur":
          props.isToday || props.isBuildDay ? "blur(0)" : "blur(2px)",
        "--day-transform": props.isToday
          ? "translate(20px, -12px) scale(1.4)"
          : props.isBuildDay && !props.isToday
          ? "translate(12px, -8px) scale(1.05)"
          : "none",
        "--day-zindex": props.isToday
          ? 2
          : props.isBuildDay && !props.isToday
          ? 1
          : "unset",
      } as JSX.CSSProperties)
  );

  return (
    <div class={styled.container} style={styles()}>
      <p class={styled.label}>{props.label}</p>
    </div>
  );
};
