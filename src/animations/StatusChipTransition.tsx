import { children, JSXElement } from "solid-js";
import { Transition } from "solid-transition-group";
import { animate } from "motion";

import type { Component } from "solid-js";

interface TransitionProps {
  isOpen: boolean;
  children: JSXElement;
}

export const StatusChipTransition: Component<TransitionProps> = (props) => {
  const child = children(() => props.children);

  const onEnter = (el: Element, done: () => void) => {
    animate(
      el,
      {
        opacity: 1,
      },
      {
        duration: 0.2,
      }
    ).finished.then(() => done());
  };

  const onExit = (el: Element, done: () => void) => {
    animate(
      el,
      {
        opacity: 0,
      },
      {
        duration: 0.2,
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
