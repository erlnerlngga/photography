import { PaddingContainer } from "@/components/padding-container";
import { ListImage } from "@/components/image-list";
import { getImages } from "@/lib/image-utils";
import { createApi } from "unsplash-js";
import nodeFetch from "node-fetch";

export default async function Page() {
  const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY!,
    fetch: nodeFetch as unknown as typeof fetch,
  });

  const resIMG = await getImages(unsplash, "spain");

  return (
    <div>
      <PaddingContainer>
        <ListImage photos={resIMG} />
      </PaddingContainer>
    </div>
  );
}
