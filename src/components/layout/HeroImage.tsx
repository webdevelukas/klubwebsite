import styled from "styled-components";
import NextImage from "next/image";

export type Props = {
  image: { url: string; alt?: string };
  title: string;
  subtitle: string;
};

function HeroImage(props: Props) {
  const { image, title, subtitle } = props;

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
      <TitleWrapper>
        <H1>{title}</H1>
        <Subtitle>{subtitle}</Subtitle>
      </TitleWrapper>
    </Container>
  );
}

export default HeroImage;

const Container = styled.article`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding-bottom: 50%;
  }
`;

const TitleWrapper = styled.div`
  background-color: var(--content-background);
  padding: var(--medium-spacing);
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  @media screen and (min-width: 992px) {
    padding: var(--large-spacing);
  }
`;

const H1 = styled.h1`
  color: var(--main-color);
  font-size: 2rem;
  text-align: left;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 0.75rem;

  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;
