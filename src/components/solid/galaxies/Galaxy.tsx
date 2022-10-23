import { onMount } from "solid-js";
import type { Component } from "solid-js";

import type { GalaxyColor } from "../../../types/components";

interface GalaxyProps {
  color: GalaxyColor;
  width: number;
  height: number;
  blur: number;
}

export const Galaxy: Component<GalaxyProps> = (props) => {
  let canvasRef: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvasRef.getContext("2d");
    if (ctx) {
      const color =
        props.color === "teal"
          ? "#14ffff"
          : props.color === "dark-purple"
          ? "#3d00bd"
          : props.color === "pink"
          ? "#d631ff"
          : "#7a00eb";
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvasRef.width, canvasRef.height);
      canvasRef.style.filter = `blur(${props.blur}px)`;
    }
  });

  return <canvas ref={canvasRef!} width={props.width} height={props.height} />;
};
