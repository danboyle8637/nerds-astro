import type { RadioOption } from "../types/forms";

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
