import styled from "styled-components";
import NextImage from "next/image";
import { Department } from "../../types";

export type Props = {
  department: Department;
};

function Card({ department }: Props) {
  const { name, image } = department;

  return (
    <Container>
      <ImageWrapper>
        <NextImage
          src={image.url}
          alt={image.alt || name}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <H3>{name}</H3>
    </Container>
  );
}

export default Card;

const Container = styled.article`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
  width: 100%;
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  > div:first-child {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }
`;

const H3 = styled.h3`
  background-color: var(--content-background);
  padding: var(--small-spacing) var(--medium-spacing);
  color: var(--main-color);
  font-size: 1.25rem;
  text-align: left;
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
