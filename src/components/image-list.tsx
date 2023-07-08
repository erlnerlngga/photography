"use client";

import Image from "next/image";
import LightGalleryComponent from "lightgallery/react";
import { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import { Photo } from "@/lib/types";
import Masonry from "react-masonry-css";
import { useMounted } from "@/hooks/use-mounted";
import { PaddingContainer } from "./padding-container";

// import lgThumbnail from "lightgallery/plugins/thumbnail";
// import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
// import "lightgallery/css/lg-zoom.css";
// import "lightgallery/css/lg-thumbnail.css";

interface PropTypes {
  photos: Photo[];
}

export function ListImage({ photos }: PropTypes) {
  const lightboxRef = useRef<LightGallery | null>(null);
  const mounted = useMounted();

  if (!mounted) {
    return (
      <PaddingContainer>
        <div className="grid place-items-center mt-20">
          <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-4xl">
            Loading ...
          </h1>
        </div>
      </PaddingContainer>
    );
  }

  return (
    <>
      <Masonry breakpointCols={4} className="flex gap-8" columnClassName="">
        {photos.map((photo, idx) => (
          <div className="relative" key={idx}>
            <Image
              src={photo.src}
              alt={photo.alt}
              className="relative my-8 rounded-md shadow"
              width={photo.width}
              height={photo.height}
              placeholder="blur"
              blurDataURL={photo.blurDataURL}
            />

            <div
              className="absolute w-full h-full inset-0 bg-transparent overflow-hidden cursor-pointer"
              onClick={() => {
                if (lightboxRef.current !== null) {
                  lightboxRef.current.openGallery(idx);
                }
              }}
            />
          </div>
        ))}
      </Masonry>

      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) {
            lightboxRef.current = ref.instance;
          }
        }}
        speed={500}
        plugins={[]}
        dynamic
        dynamicEl={photos.map((photo) => ({
          src: photo.src,
          thumb: photo.thumb,
        }))}
        mode="lg-fade"
        download={false}
        counter={false}
        allowMediaOverlap
        hideScrollbar={true}
        iframeHeight="90%"
      />
    </>
  );
}
