import { animate } from "motion";

export const notificationPop = (notification: HTMLImageElement) => {
  animate(
    notification,
    {
      transform: "scale(1)",
      opacity: 1,
    },
    {
      duration: 0.4,
      easing: [0.29, 1.51, 0.54, 1.02],
    }
  );
};

export const headerNavIconEnter = (icon: HTMLImageElement) => {
  animate(
    icon,
    { x: 0, opacity: 1, scale: 1 },
    { duration: 0.2, easing: "ease-in-out" }
  );
};

export const headerNavIconExit = (icon: HTMLImageElement) => {
  animate(
    icon,
    { x: "-60%", opacity: 0, scale: 0.9 },
    {
      duration: 0.2,
      easing: "ease-in-out",
    }
  );
};
