export interface InputValue {
  value: string;
  valid: boolean;
}

export type InputOptions = {
  initial: boolean;
  touched: boolean;
};

export interface RadioOption {
  id: number;
  value: string;
  label: string;
  isChecked: boolean;
}

export interface RadioInput {
  value: string;
  options: RadioOption[];
}

export interface LeadFormOption {
  id: number;
  value: string;
  label: string;
  isChecked: boolean;
}

export interface SliderRadioInput {
  value: number;
  options: SliderInputOption[];
}

export type SliderInputName =
  | "blogPosts"
  | "emails"
  | "ecomProductType"
  | "ecomProducts"
  | "webSalesCopy"
  | "adCopy"
  | "nerdCopyChat"
  | "haveSiteDesign";

export interface SliderInputOption {
  id: number;
  name: string | SliderInputName;
  value: number;
  label: string;
  isSelected: boolean;
}

export type UpdateValueFunction = (event: InputEvent) => void;

export type UpdateOptionsFunction = (event: FocusEvent) => void;

export type CopyFormType =
  | "blogPosts"
  | "emails"
  | "ecomProductType"
  | "ecomProducts"
  | "adCopy"
  | "webSalesPages"
  | "nerdCopyChat";

export type FormType = "webDesign" | "sevenDaySite" | "preNerdChat";

export interface ContactFormBody {
  timestamp: number;
  firstName: string;
  emailAddress: string;
  contactReason: string;
  contactMessage: string;
}

export interface WebDesignFormBody {
  timestamp: number;
  firstName: string;
  emailAddress: string;
  phoneNumber: string;
  websitePriority: string;
  currentWebsite: string;
  whyImportant: string;
}

export interface SevenDaySiteFormBody {
  timestamp: number;
  firstName: string;
  emailAddress: string;
  phoneNumber: string;
  websiteGoal: string;
  currentWebsite: string;
  whyImportant: string;
}

export interface FourLinksFormBody {
  emailAddress: string;
}
