import React from "react";
import styled from "styled-components";
import FilestackImage from "elements/FilestackImage";
Lightbox.propTypes = {};
function Lightbox({ setShowLightbox, images }) {
  return (
    <Container>
      <Wrapper>
        <ImageCount>{images.length} Bilder</ImageCount>
        <button onClick={() => setShowLightbox(false)}>X Schließen</button>
      </Wrapper>
      <ImageGallery>
        {images.map((image, index) => (
          <LightboxPicture key={index}>
            <Image src={image.url} alt={image.alt} />
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
const Image = styled(FilestackImage)`
  position: absolute;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  margin-bottom: 1rem;
`;
const ImageGallery = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  grid-row-gap: 2rem;
`;
const LightboxPicture = styled.picture`
  position: relative;
  width: 100%;
  height: auto;
  padding-bottom: 75%;
`;
const Container = styled.div`
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  padding: 2rem 1rem;
`;
