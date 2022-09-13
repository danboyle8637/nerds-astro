import type { Component } from "solid-js";

import { CopyBlogForm } from "./CopyBlogForm";
import type { CopyFormType } from "../../../types/forms";

interface FormSwitcherProps {
  formType: CopyFormType;
}

export const CopywritingFormSwitcher: Component<FormSwitcherProps> = (
  props
) => {
  switch (props.formType) {
    case "blogPosts": {
      return <CopyBlogForm />;
    }
    default: {
      return <h1>No Form!</h1>;
    }
  }
};
