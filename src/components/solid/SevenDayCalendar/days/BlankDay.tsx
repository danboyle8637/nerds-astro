import { Index } from "solid-js";
import type { Component } from "solid-js";

import styled from "./BlankDay.module.css";

interface BlankDayProps {
  daysArray: number[];
}

export const BlankDay: Component<BlankDayProps> = (props) => {
  return (
    <Index each={props.daysArray}>{() => <div class={styled.day} />}</Index>
  );
};
