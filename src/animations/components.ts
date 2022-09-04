import { animate, timeline, spring } from "motion";

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
