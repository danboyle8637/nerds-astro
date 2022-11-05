import { createEffect } from "solid-js";
import type { Component, Setter } from "solid-js";

import { SuccessIcon } from "../../../svgs/SuccessIcon";
import { ErrorIcon } from "../../../svgs/ErrorIcon";
import { CloseIcon } from "../../../svgs/CloseIcon";
import { StatusChipTransition } from "../../../../animations/StatusChipTransition";
import {
  openStatusChip,
  closeStatusChip,
} from "../../../../animations/components";
import type { ShortMessageOverlayIcon } from "../../../../types/components";
import styled from "./ShortMessageOverlay.module.css";

interface OverlayProps {
  type: ShortMessageOverlayIcon;
  isOpen: boolean;
  handleActiveClick: (status: boolean) => void;
}

export const ShortMessageOverlay: Component<OverlayProps> = (props) => {
  let statusChipRef: HTMLDivElement;

  createEffect(() => {
    if (props.isOpen) {
      openStatusChip(statusChipRef);
    }

    if (!props.isOpen) {
      closeStatusChip(statusChipRef);
    }
  });

  const handleCloseOverlay = () => {
    setTimeout(() => {
      props.handleActiveClick(false);
    }, 440);
  };

  const renderMessage = () => {
    switch (props.type) {
      case "success": {
        return <p class={styled.paragraph}>You're on the list!</p>;
      }
      case "error": {
        return <p class={styled.paragraph}>Error. Try again!</p>;
      }
    }
  };

  const activeIcon = () => {
    switch (props.type) {
      case "success": {
        return <SuccessIcon />;
      }
      case "error": {
        return <ErrorIcon />;
      }
    }
  };

  return (
    <StatusChipTransition isOpen={props.isOpen}>
      <div class={styled.screen_cover}>
        <div ref={statusChipRef!} class={styled.status_chip}>
          <div class={styled.content_container}>
            <div class={styled.icon}>{activeIcon()}</div>
            {renderMessage()}
          </div>
          {props.type === "error" ? (
            <button
              type="button"
              class={styled.reload_button}
              onClick={handleCloseOverlay}
            >
              Reload Form
            </button>
          ) : (
            <button
              type="button"
              class={styled.close_icon_button}
              onclick={handleCloseOverlay}
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>
    </StatusChipTransition>
  );
};
