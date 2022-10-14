export const postImage = (
  imageUrl: string,
  altTag: string,
  titleTag: string
) => `
  <div class="post-image-container">
    <img class="post-image" src="${imageUrl}?w=800&format=auto" alt="${altTag}" title="${titleTag}">
    <div class="post-image-background"></div>
  </div>
`;
