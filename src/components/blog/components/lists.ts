export const unorderedList = (children: string) => `<ul>${children}</ul>`;

export const baseBullet = (color: "teal" | "purple", children: string) => {
  const blueBullet =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-focus_UiuHs8It6.png?ik-sdk-version=javascript-1.4.3";

  const purpleBullet =
    "https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/radio-not-active_khmUjQ0M0.png?ik-sdk-version=javascript-1.4.3";

  const activeBullet = color === "purple" ? purpleBullet : blueBullet;

  return `
    <li class="base-bullet">
      <img class="block" src=${activeBullet} alt="Bullet point" title="Bullet Point">
      ${children}
    </li>
`;
};

export const excalaimationBullet = (children: string) => `
  <li class="important-bullet">
    <img class="block" src="https://ik.imagekit.io/csu76xuqqlwj/nerds-who-sell/site-assets/exclaimation-bullet_6hT7S6T9g.png?ik-sdk-version=javascript-1.4.3" alt="Bullet point" title="Bullet Point">
    ${children}
  </li>
`;
