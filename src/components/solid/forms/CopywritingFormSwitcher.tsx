import type { Component } from "solid-js";

import { BlogCopyForm } from "./BlogCopyForm";
import { WebSalesCopyForm } from "./WebSalesCopyForm";
import { EmailCopyForm } from "./EmailCopyForm";
import { ProductCopyForm } from "./ProductCopyForm";
import { AdCopyForm } from "./AdCopyForm";
import { NerdCopyChatForm } from "./NerdCopyChatForm";
import type { CopyFormType } from "../../../types/forms";

interface FormSwitcherProps {
  formType: CopyFormType;
}

export const CopywritingFormSwitcher: Component<FormSwitcherProps> = (
  props
) => {
  switch (props.formType) {
    case "blogPosts": {
      return <BlogCopyForm />;
    }
    case "webSalesPages": {
      return <WebSalesCopyForm />;
    }
    case "emails": {
      return <EmailCopyForm />;
    }
    case "ecomProducts": {
      return <ProductCopyForm />;
    }
    case "adCopy": {
      return <AdCopyForm />;
    }
    case "nerdCopyChat": {
      return <NerdCopyChatForm />;
    }
    default: {
      return <h1>No Form!</h1>;
    }
  }
};
