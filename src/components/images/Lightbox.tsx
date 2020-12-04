import styled from "styled-components";
import NextImage from "next/image";
import useMediaQuery from "hooks/useMediaQuery";

type LightboxProps = {
  setShowLightbox: (showLightbox: boolean) => void;
  images: [{ url: string; alt: string; width: number; height: number }];
};

function Lightbox({ setShowLightbox, images }: LightboxProps) {
  const [fitsMediaQuery] = useMediaQuery("(min-width: 900px)");

  return (
    <Container>
      <Wrapper>
        <ImageCount>{images.length} Bilder</ImageCount>
        <button onClick={() => setShowLightbox(false)}>X Schließen</button>
      </Wrapper>
      <ImageGallery>
        {images.map((image, index) => (
          <LightboxPicture key={index}>
            {!fitsMediaQuery && (
              <NextImage
                src={image.url}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            )}
            {fitsMediaQuery && (
              <NextImage
                src={image.url}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
              />
            )}
          </LightboxPicture>
        ))}
      </ImageGallery>
    </Container>
  );
}

export default Lightbox;

const ImageCount = styled.p`
  color: white;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
`;
const ImageGallery = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 1rem;
  align-content: start;
`;
const LightboxPicture = styled.picture`
  position: relative;
  height: 60vmin;

  @media screen and (min-width: 900px) {
    height: 80vh;
  }
`;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  z-index: 4000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem 1rem;
  overflow-y: scroll;
`;
