import type {
  RadioInput,
  RadioOption,
  SliderInputOption,
} from "../types/forms";

export const contactFormOptions: RadioOption[] = [
  {
    id: 0,
    value: "website_design_and_dev",
    label: "Website Design & Developement",
    isChecked: false,
  },
  {
    id: 1,
    value: "copywriting",
    label: "Copywriting Services",
    isChecked: false,
  },
  {
    id: 2,
    value: "blog_posts",
    label: "Guest Blog Posts",
    isChecked: false,
  },
  {
    id: 3,
    value: "tech_reviews",
    label: "Tech Review",
    isChecked: false,
  },
  {
    id: 4,
    value: "other",
    label: "Something else",
    isChecked: false,
  },
];

export const leadFormOptions: RadioOption[] = [
  {
    id: 0,
    value: "new_website",
    label: "New Website",
    isChecked: false,
  },
  {
    id: 1,
    value: "update_website",
    label: "Update / Manage Current Website",
    isChecked: false,
  },
  {
    id: 2,
    value: "need_blog_posts",
    label: "Need Blog Posts",
    isChecked: false,
  },
  {
    id: 3,
    value: "need_sales_copy",
    label: "Need Sales Copy",
    isChecked: false,
  },
  {
    id: 4,
    value: "need_emails",
    label: "Need Email Copy",
    isChecked: false,
  },
  {
    id: 5,
    value: "need_tech_help",
    label: "Need Nerdy Tech Help",
    isChecked: false,
  },
];

export const sevenDaySiteOptions: RadioOption[] = [
  {
    id: 0,
    value: "new_mini_website",
    label: "New Mini Website",
    isChecked: false,
  },
  {
    id: 1,
    value: "promote_one_service",
    label: "Promote One Service / Product",
    isChecked: false,
  },
  {
    id: 2,
    value: "collect_leads",
    label: "Collect Leads",
    isChecked: false,
  },
  {
    id: 3,
    value: "other",
    label: "Something Else",
    isChecked: false,
  },
];

export const copywritingTimelineOptions: RadioOption[] = [
  {
    id: 0,
    value: "one_week",
    label: "One Week",
    isChecked: false,
  },
  {
    id: 1,
    value: "two_weeks",
    label: "Two Weeks",
    isChecked: false,
  },
  {
    id: 2,
    value: "urgent",
    label: "Urgent",
    isChecked: false,
  },
  {
    id: 3,
    value: "other",
    label: "Other",
    isChecked: false,
  },
];

export const copyBlogOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "blog_post",
    label: "1",
    value: 1,
    isSelected: false,
  },
  {
    id: 1,
    name: "blog_post",
    label: "2",
    value: 2,
    isSelected: true,
  },
  {
    id: 2,
    name: "blog_post",
    label: "3",
    value: 3,
    isSelected: false,
  },
  {
    id: 3,
    name: "blog_post",
    label: "4",
    value: 4,
    isSelected: false,
  },
  {
    id: 4,
    name: "blog_post",
    label: "5",
    value: 5,
    isSelected: false,
  },
];

export const productTypeOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "productType",
    label: "Short",
    value: 1,
    isSelected: true,
  },
  {
    id: 1,
    name: "productType",
    label: "Long",
    value: 2,
    isSelected: false,
  },
];

export const copyProductOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "ecom_product",
    label: "1",
    value: 1,
    isSelected: false,
  },
  {
    id: 1,
    name: "ecom_product",
    label: "2",
    value: 2,
    isSelected: false,
  },
  {
    id: 2,
    name: "ecom_product",
    label: "3",
    value: 3,
    isSelected: false,
  },
  {
    id: 3,
    name: "ecom_product",
    label: "4",
    value: 4,
    isSelected: false,
  },
  {
    id: 4,
    name: "ecom_product",
    label: "5",
    value: 5,
    isSelected: true,
  },
  {
    id: 5,
    name: "ecom_product",
    label: "6",
    value: 6,
    isSelected: false,
  },
  {
    id: 6,
    name: "ecom_product",
    label: "7",
    value: 7,
    isSelected: false,
  },
  {
    id: 7,
    name: "ecom_product",
    label: "8",
    value: 8,
    isSelected: false,
  },
  {
    id: 8,
    name: "ecom_product",
    label: "9",
    value: 9,
    isSelected: false,
  },
  {
    id: 9,
    name: "ecom_product",
    label: "10",
    value: 10,
    isSelected: false,
  },
];

export const copyEmailOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "emails",
    label: "1",
    value: 1,
    isSelected: false,
  },
  {
    id: 1,
    name: "emails",
    label: "2",
    value: 2,
    isSelected: false,
  },
  {
    id: 2,
    name: "emails",
    label: "3",
    value: 3,
    isSelected: false,
  },
  {
    id: 3,
    name: "emails",
    label: "4",
    value: 4,
    isSelected: false,
  },
  {
    id: 4,
    name: "emails",
    label: "5",
    value: 5,
    isSelected: true,
  },
  {
    id: 5,
    name: "emails",
    label: "6",
    value: 6,
    isSelected: false,
  },
  {
    id: 6,
    name: "emails",
    label: "7",
    value: 7,
    isSelected: false,
  },
  {
    id: 7,
    name: "emails",
    label: "8",
    value: 8,
    isSelected: false,
  },
  {
    id: 8,
    name: "emails",
    label: "9",
    value: 9,
    isSelected: false,
  },
  {
    id: 9,
    name: "emails",
    label: "10",
    value: 10,
    isSelected: false,
  },
];

export const copyWebSalesCopyOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "web_sales_copy",
    label: "1",
    value: 1,
    isSelected: false,
  },
  {
    id: 1,
    name: "web_sales_copy",
    label: "2",
    value: 2,
    isSelected: true,
  },
  {
    id: 2,
    name: "web_sales_copy",
    label: "3",
    value: 3,
    isSelected: false,
  },
  {
    id: 3,
    name: "web_sales_copy",
    label: "4",
    value: 4,
    isSelected: false,
  },
];

export const adCopyOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "adCopy",
    label: "Google Ads",
    value: 1,
    isSelected: true,
  },
  {
    id: 1,
    name: "adCopy",
    label: "Facebook Ads",
    value: 2,
    isSelected: false,
  },
];

export const nerdCopyChatOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "nerdCopyChat",
    label: "30 Minutes",
    value: 1,
    isSelected: true,
  },
  {
    id: 1,
    name: "nerdCopyChat",
    label: "60 Minutes",
    value: 2,
    isSelected: false,
  },
];

// ************* Pre Nerd Chat Form ************* //

export const haveDesignOptions: SliderInputOption[] = [
  {
    id: 0,
    name: "haveDesignOptions",
    label: "No I Don't",
    value: 1,
    isSelected: true,
  },
  {
    id: 1,
    name: "haveDesignOptions",
    label: "Yes I Do",
    value: 2,
    isSelected: false,
  },
];

export const websiteTimelineOptions: RadioOption[] = [
  {
    id: 0,
    label: "Under 14 days",
    value: "under_14_days",
    isChecked: true,
  },
  {
    id: 1,
    label: "One month or so",
    value: "one_month",
    isChecked: false,
  },
  {
    id: 1,
    label: "Two months or so",
    value: "two_months",
    isChecked: false,
  },
  {
    id: 1,
    label: "I want a site but I'm in no rush",
    value: "not_serious",
    isChecked: false,
  },
];
