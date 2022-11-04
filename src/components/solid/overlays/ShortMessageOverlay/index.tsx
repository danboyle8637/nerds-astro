import type { Component } from "solid-js";

import { SuccessIcon } from "../../../svgs/SuccessIcon";
import { ErrorIcon } from "../../../svgs/ErrorIcon";
import { StatusChipTransition } from "../../../../animations/StatusChipTransition";
import type { ShortMessageOverlayIcon } from "../../../../types/components";
import styled from "./ShortMessageOverlay.module.css";

interface OverlayProps {
  type: ShortMessageOverlayIcon;
  isOpen: boolean;
}

export const ShortMessageOverlay: Component<OverlayProps> = (props) => {
  let statusChipRef: HTMLDivElement;

  const handleCloseOverlay = () => {
    console.log("Close overlay and take some action");
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
          ) : null}
        </div>
      </div>
    </StatusChipTransition>
  );
};
