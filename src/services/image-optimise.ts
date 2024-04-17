import noImage from "../assets/no-image-placeholder.webp";
function getOptimisedImage(url: string) {
  if (!url) return noImage;
  const index = url.indexOf("media/") + "media/".length;
  const optimisedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return optimisedUrl;
}

export default getOptimisedImage;
