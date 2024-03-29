import { useEffect, useState } from "react";
import styled from "styled-components";
import Lightbox from "./Lightbox";
import useMediaQuery from "hooks/useMediaQuery";
import useScrollPosition from "hooks/useScrollPosition";
import NextImage from "next/image";

type GalleryProps = {
  images: [{ url: string; alt: string; width: number; height: number }];
};

function Gallery({ images }: GalleryProps) {
  const [showLightbox, setShowLightbox] = useState(false);
  const [fitsMediaQuery] = useMediaQuery("(min-width: 1100px");
  const { scrollPosition } = useScrollPosition();

  useEffect(() => {
    const body = document.body;

    if (typeof window !== "undefined" && showLightbox) {
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition}px`;
    }
    if (typeof window !== "undefined" && !showLightbox) {
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [showLightbox]);

  const galleryImages = fitsMediaQuery ? images : images.slice(0, 4);

  return (
    <>
      <GallerySection>
        {galleryImages.map((image, index) => (
          <Picture key={index} onClick={() => setShowLightbox(true)}>
            {index === 3 && images.length > 4 && !fitsMediaQuery && (
              <ImageOverlay onClick={() => setShowLightbox(true)}>
                <OverlayText>+ {images.length - 3}</OverlayText>
              </ImageOverlay>
            )}
            <NextImage
              src={image.url}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </Picture>
        ))}
      </GallerySection>
      {showLightbox && (
        <Lightbox setShowLightbox={setShowLightbox} images={images} />
      )}
    </>
  );
}
export default Gallery;
const GallerySection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vmin, 1fr));
  grid-gap: 0.5rem;

  @media screen and (min-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(25vmin, 1fr));
  }
`;
const ImageOverlay = styled.div`
  z-index: 100;
  position: absolute;
  background: var(--main-color-overlay);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OverlayText = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2rem;
`;
const Picture = styled.picture`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 100%;
`;
