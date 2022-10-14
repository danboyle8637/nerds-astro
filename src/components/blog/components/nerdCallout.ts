import { renderBlogPostContent } from "../serializer";

export const nerdCallout = (headline: string, content: []) => {
  const html = renderBlogPostContent(content);

  return `<div class="nerd-callout-container">
    ${html}
  </div>`;
};
