import type { NavLink, FooterLink } from "../types/components";

export const headerNavLinks: NavLink[] = [
  {
    id: 0,
    navType: "about",
    imageUrl:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/tr:w-100/home-icon_4oHN5S2B8.png?ik-sdk-version=javascript-1.4.3",
    altTag: "Code brackets",
    titleTag: "About Nerds",
    iconWidth: 50,
    navLabel: "About",
    slug: "/about",
  },
  {
    id: 1,
    navType: "now",
    imageUrl:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/tr:w-80/now-icon_u0oJBs1lm.png?ik-sdk-version=javascript-1.4.3",
    altTag: "Exclaimation mark",
    titleTag: "Working On Now",
    iconWidth: 20,
    navLabel: "Now",
    slug: "/now",
  },
  {
    id: 2,
    navType: "services",
    imageUrl:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/tr:w-100/services-icon_v5x0YFZoAF.png?ik-sdk-version=javascript-1.4.3",
    altTag: "Computer with code",
    titleTag: "Nerd Services",
    iconWidth: 40,
    navLabel: "Services",
    slug: "/services",
  },
  {
    id: 3,
    navType: "blog",
    imageUrl:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/tr:w-100/blog-icon_bcg8Wyw9v.png?ik-sdk-version=javascript-1.4.3",
    altTag: "Server icon",
    titleTag: "Blogs",
    iconWidth: 40,
    navLabel: "Blogs",
    slug: "/blog",
  },
  {
    id: 4,
    navType: "contact",
    imageUrl:
      "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/tr:w-100/contact-icon_xvwhxHZZY.png?ik-sdk-version=javascript-1.4.3",
    altTag: "Contact envelop",
    titleTag: "Contact Nerds",
    iconWidth: 30,
    navLabel: "Contact",
    slug: "/contact",
  },
];

export const footerAdminNavLinks: FooterLink[] = [
  {
    id: 0,
    type: "admin",
    label: "Home",
    slug: "/",
  },
  {
    id: 1,
    type: "admin",
    label: "About",
    slug: "/about",
  },
  {
    id: 2,
    type: "admin",
    label: "Services",
    slug: "/services",
  },
  {
    id: 3,
    type: "admin",
    label: "Blog",
    slug: "/blog",
  },
  {
    id: 4,
    type: "admin",
    label: "Contact",
    slug: "/contact",
  },
  {
    id: 5,
    type: "admin",
    label: "Privacy",
    slug: "/legal/privacy",
  },
];

export const footerWebDevLinks: FooterLink[] = [
  {
    id: 0,
    type: "service",
    label: "Web Design & Dev",
    slug: "/services/web-design-and-development",
  },
  {
    id: 1,
    type: "service",
    label: "7 Day Site",
    slug: "/services/seven-day-site",
  },
  {
    id: 2,
    type: "service",
    label: "Web Strategy Chat",
    slug: "/services/web-strategy-chat",
  },
];

export const footerCopyLinks: FooterLink[] = [
  {
    id: 0,
    type: "service",
    label: "Web Sales Copy",
    slug: "/services/web-page-sales-copy",
  },
  {
    id: 1,
    type: "service",
    label: "Email Copy",
    slug: "/services/email-marketing-copoy",
  },
  {
    id: 2,
    type: "service",
    label: "Digital Ad Copy",
    slug: "/services/digital-ad-copy",
  },
  {
    id: 3,
    type: "service",
    label: "Product Copy",
    slug: "/services/product-sales-copy",
  },
  {
    id: 4,
    type: "service",
    label: "Blog Posts",
    slug: "/services/blog-post-writing",
  },
  {
    id: 5,
    type: "service",
    label: "Copy Chat",
    slug: "/services/nerd-copy-chat",
  },
];

export const footerBlogLinks: FooterLink[] = [
  {
    id: 0,
    type: "service",
    label: "Coding Blog",
    slug: "/blog/coding",
  },
  {
    id: 1,
    type: "service",
    label: "Marketing Blog",
    slug: "/services/marketing",
  },
  {
    id: 2,
    type: "service",
    label: "Tech Blog",
    slug: "/services/tech",
  },
];
