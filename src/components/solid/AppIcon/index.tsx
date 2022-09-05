import { Component, createEffect, onMount } from "solid-js";
import { Application } from "@splinetool/runtime";

import { shouldShow, setBreakPoint } from "../../../solid/matchMediaStore";
import styles from "./AppIcon.module.css";

export const AppIcon: Component = () => {
  let canvasRef: HTMLCanvasElement;

  onMount(() => {
    const canvas = new Application(canvasRef);
    canvas.load("https://prod.spline.design/7DOBu1QCrNG3sb0o/scene.splinecode");
  });

  createEffect(() => {
    setBreakPoint(960);
  });

  return <canvas class={styles.scene} ref={canvasRef!} height={500}></canvas>;
};
