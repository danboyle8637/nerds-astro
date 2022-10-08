import { toHTML, uriLooksSafe } from "@portabletext/to-html";
import type {
  SerializedBlock,
  PortableTextHtmlComponents,
  PortableTextComponentOptions,
  PortableTextBlockComponent,
  PortableTextListItemComponent,
  PortableTextOptions,
} from "@portabletext/to-html";
import {
  paragraph,
  headline2,
  headline3,
  headline4,
  unorderedList,
  baseBullet,
  excalaimationBullet,
} from "./components";

const serializer: Partial<PortableTextHtmlComponents> = {
  types: {
    baseImage: (props: any) => {
      return `<p>In post image goes here</p>`;
    },
    nerdCallout: (props: any) => {
      return `<p>Nerd callout goes here</p>`;
    },
    youTubeEmbed: (props: any) => {
      return `<p>YouTube player here</p>`;
    },
  },
  block: (props: any): string => {
    switch (props.node.style) {
      case "normal": {
        return paragraph(props.children);
      }
      case "h2": {
        return headline2(props.children);
      }
      case "h3": {
        return headline3(props.children);
      }
      case "h4": {
        return headline4(props.children);
      }
      default: {
        return "";
      }
    }
  },
  list: (props: any) => {
    return unorderedList(props.children);
  },
  listItem: (props: any) => {
    const { value } = props;
    switch (value.listItem) {
      case "blueBullet": {
        return value.children.map((bullet: any) =>
          baseBullet("teal", bullet.text)
        );
      }
      case "purpleBullet": {
        return value.children.map((bullet: any) =>
          baseBullet("purple", bullet.text)
        );
      }
      case "excalaimationBullet": {
        return value.children.map((bullet: any) =>
          excalaimationBullet(bullet.text)
        );
      }
      default: {
        return "";
      }
    }
  },
  marks: {
    strong: (props: any) => {
      return `<strong>${props.children}</strong>`;
    },
    internalPostLink: (props: any) => {
      const blogLocation = "";
      const slug = props.mark.slug.current || "/";
      return `
        <span class="link-container">
          <a href=${slug} title="More Information Link">
            ${props.children}
          </a>
          <span class="icon">
            <svg
              id="internal-link-icon"
              data-name="internal-link-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72.66 72.24">
              <path
                d="M35.04 57l-7.14 7.12a14 14 0 01-19.8 0h0a14 14 0 010-19.8L22.24 30.2a14 14 0 0119.8 0h0"
                fill="none"
                stroke="#7d83ff"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <path
                d="M36.81 16.06l8-8a14 14 0 0119.8 0h0a14 14 0 010 19.8L50.42 42.04a14 14 0 01-19.8 0h0"
                fill="none"
                stroke="#7d83ff"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
            </svg>
          </span>
        </span>
      `;
    },
    internalPageLink: (props: any) => {
      const slug = props.mark.slug.current || "";
      return `
        <span class="link-container">
          <a href=${slug} title="Check This Out Link">
            ${props.children}
          </a>
          <span class="icon">
            <svg
              id="internal-link-icon"
              data-name="internal-link-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72.66 72.24">
              <path
                d="M35.04 57l-7.14 7.12a14 14 0 01-19.8 0h0a14 14 0 010-19.8L22.24 30.2a14 14 0 0119.8 0h0"
                fill="none"
                stroke="#7d83ff"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
              <path
                d="M36.81 16.06l8-8a14 14 0 0119.8 0h0a14 14 0 010 19.8L50.42 42.04a14 14 0 01-19.8 0h0"
                fill="none"
                stroke="#7d83ff"
                stroke-linecap="round"
                stroke-miterlimit="10"
                stroke-width="8"
              />
            </svg>
          </span>
        </span>
      `;
    },
    externalLink: (props: any) => {
      const url = props.mark.externalLink;
      return `<p>This is an external link</p>`;
    },
  },
};

export const renderBlogPostContent = (blockContent: any) => {
  return toHTML(blockContent, {
    components: serializer,
  });
};
