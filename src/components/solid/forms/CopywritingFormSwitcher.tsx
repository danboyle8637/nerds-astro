import type { Component } from "solid-js";

import { CopyBlogForm } from "./CopyBlogForm";
import { WebSalesCopyForm } from "./WebSalesCopyForm";
import { EmailCopyForm } from "./EmailCopyForm";
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
    case "webSalesPages": {
      return <WebSalesCopyForm />;
    }
    case "emails": {
      return <EmailCopyForm />;
    }
    default: {
      return <h1>No Form!</h1>;
    }
  }
};
