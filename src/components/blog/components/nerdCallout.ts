import { renderBlogPostContent } from "../serializer";

export const nerdCallout = (nerd: string, headline: string, content: []) => {
  const nerdImage =
    nerd === "kindal"
      ? "https://cdn.sanity.io/images/05wlmifi/production/328ec8f40ba78453eb8f1fb7c57d6430a7c5b54c-300x300.png"
      : "https://cdn.sanity.io/images/05wlmifi/production/a48a0439728e6a0acd1ff5501e759a71f964cddd-300x300.png";

  const headlineStyles =
    nerd === "kindal"
      ? "--nerd-callout-headline: var(--accent-teal)"
      : "--nerd-callout-headline: var(--accent-purple)";

  const html = renderBlogPostContent(content);

  return `
  <div class="nerd-callout-spacer">
    <div class="nerd-callout-container" style="${headlineStyles}">
      <img class="nerd-callout-image" src="${nerdImage}" alt="${nerd}" />
      <div class="nerd-callout-card-container">
        <div class="callout">
          <p class="callout-nerd">Nerd</p>
          <p class="callout-word">Callout</p>
        </div>
        <h4 class="callout-headline">${headline}</h4>
        <div class="content-container">
          ${html}
        </div>
      </div>
    </div>
    <div class="nerd-callout-galaxy"></div>
  </div>
  `;
};
