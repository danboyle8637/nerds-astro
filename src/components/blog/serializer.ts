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
  postLink,
  postImage,
  nerdCallout,
} from "./components";
import type { BlogCategory } from "../../types/blog";

const serializer: Partial<PortableTextHtmlComponents> = {
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
    codeHighlight: (props: any) => {
      console.log(props);
      return `<span class="code-callout">${props.children}</span>`;
    },
    internalPostLink: (props: any) => {
      const location = props.value.blogLocation as BlogCategory;

      let baseUrl = "/blog";

      switch (location) {
        case "marketing":
          baseUrl = "/marketing";
          break;
        case "coding":
          baseUrl = "/coding";
          break;
        case "design":
          baseUrl = "/design";
          break;
        case "now":
          baseUrl = "/now";
          break;
        case "tech":
          baseUrl = "/tech";
          break;
      }

      const slug = `${baseUrl}/${props.value.slug}`;
      return postLink(props.markType, props.text, slug);
    },
    internalPageLink: (props: any) => {
      return postLink(props.markType, props.text, props.value.pageUrl);
    },
    externalLink: (props: any) => {
      return postLink(props.markType, props.text, props.value.externalLink);
    },
  },
  types: {
    postImage: (props: any) => {
      const imageUrl = `${props.value.imageUrl}`;
      const altTag = props.value.altTag;
      const titleTag = props.value.titleTag;
      return postImage(imageUrl, altTag, titleTag);
    },
    nerdCallout: (props: any) => {
      const nerd = props.value.nerd;
      const headline = props.value.headline;
      const blockContent = props.value.calloutDetails;
      return nerdCallout(nerd, headline, blockContent);
    },
    youTubeEmbed: (props: any) => {
      return `<p>YouTube player here</p>`;
    },
  },
};

export const renderBlogPostContent = (blockContent: any) => {
  return toHTML(blockContent, {
    components: serializer,
  });
};
