import { createEffect } from "solid-js";
import type { Component } from "solid-js";

import { NetworkRequestLoader } from "../../svgs/NetworkRequestLoader";
import styled from "./NetworkReqLoader.module.css";

export const NetworkReqLoader: Component = () => {
  return (
    <div class={styled.container}>
      <div class={styled.loader_icon}>
        <NetworkRequestLoader />
      </div>
    </div>
  );
};
