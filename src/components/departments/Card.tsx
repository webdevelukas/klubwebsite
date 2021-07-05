import styled from "styled-components";
import NextImage from "next/image";
import { Department, Group } from "../../types";

export type Props = {
  data: Department | Group;
};

function Card({ data }: Props) {
  const { name, image } = data;

  return (
    <Container>
      <Overlay>
        <H3>{name}</H3>
      </Overlay>
      <ImageWrapper>
        <NextImage
          src={image.url}
          alt={image.alt || name}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
    </Container>
  );
}

export default Card;

const Container = styled.article`
  position: relative;
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 40%;
  width: 100%;
  border-radius: var(--border-radius);

  > div:first-child {
    border-radius: var(--border-radius);
  }

  @media screen and (min-width: 576px) {
    padding-bottom: 60%;
  }
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: var(--highlight-color-overlay);
  border-radius: var(--border-radius);
`;

const H3 = styled.h3`
  color: white;
  font-size: 1.25rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
