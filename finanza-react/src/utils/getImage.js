const STRAPI_URL = "https://sparkling-connection-41d235254c.strapiapp.com";

export const getImage = (image) => {
  if (!image) return "";

  // If array (Strapi media)
  if (Array.isArray(image)) {
    const url = image[0]?.url;
    if (!url) return "";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }

  // If object
  if (typeof image === "object") {
    const url = image?.url;
    if (!url) return "";
    return url.startsWith("http") ? url : `${STRAPI_URL}${url}`;
  }

  // If string
  if (typeof image === "string") {
    return image.startsWith("http") ? image : `${STRAPI_URL}${image}`;
  }

  return "";
};