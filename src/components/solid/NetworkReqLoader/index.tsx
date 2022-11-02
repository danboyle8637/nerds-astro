import type { Component } from "solid-js";

import { NetworkRequestLoader } from "../../svgs/NetworkRequestLoader";
import { LoadingTransition } from "../../../animations/LoadingTransition";
import { isFetchCallActive } from "../../../stores/leadFormStore";
import styled from "./NetworkReqLoader.module.css";

export const NetworkReqLoader: Component = () => {
  return (
    <LoadingTransition isOpen={isFetchCallActive()}>
      <div class={styled.container}>
        <div class={styled.loader_icon}>
          <NetworkRequestLoader isActive={isFetchCallActive()} />
        </div>
      </div>
    </LoadingTransition>
  );
};
