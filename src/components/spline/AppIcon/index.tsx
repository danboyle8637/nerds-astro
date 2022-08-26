import { Component, onMount } from "solid-js";
import { createSignal } from "solid-js";
import { Application } from "@splinetool/runtime";

import styles from "./AppIcon.module.css";

export const AppIcon: Component = () => {
  let canvasRef: HTMLCanvasElement;

  onMount(() => {
    const canvas = new Application(canvasRef);
    canvas.load("https://prod.spline.design/Id21dxFEJ9tHbtBb/scene.splinecode");
    canvas.setSize(800, 700);
  });

  return <canvas class={styles.scene} ref={canvasRef!} height={400}></canvas>;
};
