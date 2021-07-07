import styled from "styled-components";
import NextImage from "next/image";
import useMediaQuery from "hooks/useMediaQuery";

export type HeroImageProps = {
  image: { url: string; alt?: string };
  title: string;
  subtitle: string;
  centered?: true;
};

function HeroImage({ image, title, subtitle, centered }: HeroImageProps) {
  const [isDesktop] = useMediaQuery("(min-width: 992px)");
  return (
    <Container>
      <ImageWrapper>
        <NextImage
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <TitleWrapper centered={centered} isDesktop={isDesktop}>
        <H1>{title}</H1>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
    </Container>
  );
}

export default HeroImage;

const Container = styled.article`
  position: relative;
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 75%;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 80vh;
  }
`;

const TitleWrapper = styled.div<{ centered?: true; isDesktop: boolean }>`
  position: ${({ isDesktop }) => (isDesktop ? "absolute" : "relative")};
  background-color: ${({ isDesktop }) =>
    isDesktop
      ? "var(--content-background-overlay)"
      : "var(--content-background)"};
  padding: var(--medium-spacing);
  border-radius: 0 0 var(--border-radius) var(--border-radius);
  bottom: 0;
  z-index: 10;
  width: 100%;
  backdrop-filter: blur(4px);
  text-align: ${({ centered }) => (centered ? "center" : "left")};

  @media screen and (min-width: 992px) {
    padding: var(--large-spacing);
  }
`;

const H1 = styled.h1`
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 0.25rem;

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.75rem;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;
