function getOptimisedImage(url: string) {
  const index = url.indexOf("media/") + "media/".length;
  const optimisedUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return optimisedUrl;
}

export default getOptimisedImage;
