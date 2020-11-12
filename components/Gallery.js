import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "styles/colors";
import Lightbox from "../components/Images/Lightbox";
import FilestackImage from "elements/FilestackImage";
Gallery.propTypes = {};
function Gallery({ images }) {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <>
      <GallerySection>
        {images.slice(0, 4).map((image, index) => (
          <Picture key={index} onClick={() => setShowLightbox(true)}>
            {index === 3 && images.length > 4 && (
              <ImageOverlay onClick={() => setShowLightbox(true)}>
                <OverlayText>+ {images.length - 3}</OverlayText>
              </ImageOverlay>
            )}
            <Image src={image.url} alt={image.alt} />
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
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 0.5rem;
  padding: 0 1rem;
`;
const Image = styled(FilestackImage)`
  position: absolute;
`;
const ImageOverlay = styled.div`
  z-index: 100;
  position: absolute;
  background: ${colors.main.overlay};
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
