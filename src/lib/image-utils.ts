import { createApi } from "unsplash-js";
import { Photo } from "./types";
import lqip from "lqip-modern";
import axios from "axios";

export async function getBlurData(url: string) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data);
  const lqipData = await lqip(buffer);

  return lqipData.metadata.dataURIBase64;
}

export async function getImages(
  cli: ReturnType<typeof createApi>,
  query: string
): Promise<Photo[]> {
  const mappedPhotos: Photo[] = [];

  const photos = await cli.photos.getRandom({
    count: 8,
    query,
  });

  if (photos.type === "success") {
    const responseArr = Array.isArray(photos.response)
      ? photos.response
      : [photos.response];

    const photosArr = responseArr.map((photo, idx) => ({
      src: photo.urls.full,
      thumb: photo.urls.thumb,
      width: photo.width,
      height: photo.height,
      alt: photo.alt_description ?? `img-${idx}`,
      blurDataURL: `${photo.blur_hash}`,
    }));

    const photosArrWithDataUrl: Photo[] = [];

    for (const photo of photosArr) {
      const blurDataURL = await getBlurData(photo.src);
      photosArrWithDataUrl.push({ ...photo, blurDataURL });
    }

    mappedPhotos.push(...photosArr);
  } else {
    console.error("Could not get photos");
  }

  return mappedPhotos;
}
