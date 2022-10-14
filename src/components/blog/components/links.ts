import type { SerializedLink } from "../../../types/blog";

const externalLinkIcon = `
  <svg
    id="external-link-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 83.24 81.95">
      <path
        id="box"
        d="M69.95 45.72v14a16.26 16.26 0 01-16.22 16.25H22.21A16.26 16.26 0 016 59.73V28.21a16.26 16.26 0 0116.21-16.24h12.35"
        fill="none"
        stroke="#7d83ff"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="12"
      />
      <g
        id="arrow"
        fill="none"
        stroke="#7d83ff"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="12">
        <path id="link-out-base-line" d="M37.97 43.97L77.09 6.09" />
        <path id="top-arrow-head" d="M56.13 6h21" />
        <path id="bottom-arrow-head" d="M77.24 6v21" />
      </g>
  </svg>
`;

const internalLinkIcon = `
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
`;

export const postLink = (
  type: SerializedLink,
  children: string,
  url: string
) => {
  const linkRel = type === "externalLink" ? "noopener noreferrer" : "prefetch";
  const linkTarget = type === "externalLink" ? "_blank" : "_self";
  const icon = type === "externalLink" ? externalLinkIcon : internalLinkIcon;

  return `
    <span class="link-container">
      <a href="${url}" rel="${linkRel}" target="${linkTarget}" title="${children}">
        ${children}
      </a>
      <span class="icon">
        ${icon}
      </span>
    </span>
  `;
};
