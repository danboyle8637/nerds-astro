import { children, createSignal, JSXElement } from "solid-js";
import { Transition } from "solid-transition-group";
import { animate } from "motion";

import type { Component } from "solid-js";

interface TransitionProps {
  isOpen: boolean;
  children: JSXElement;
}

export const LoadingTransition: Component<TransitionProps> = (props) => {
  const child = children(() => props.children);

  const onEnter = (el: Element, done: () => void) => {
    animate(
      el,
      {
        scale: 1,
        opacity: 1,
      },
      {
        duration: 0.3,
        easing: "ease-in-out",
      }
    ).finished.then(() => done());
  };

  const onExit = (el: Element, done: () => void) => {
    animate(
      el,
      {
        scale: 1.4,
        opacity: 0,
      },
      {
        duration: 0.3,
        easing: "ease-in-out",
      }
    ).finished.then(() => {
      done();
    });
  };

  return (
    <Transition onEnter={onEnter} onExit={onExit}>
      {props.isOpen ? child() : null}
    </Transition>
  );
};
