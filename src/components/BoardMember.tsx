import styled from "styled-components";
import { Author } from "types/author";
import NextImage from "next/image";

type BoardMemberProps = {
  boardMember: Author;
};

function BoardMember({ boardMember }: BoardMemberProps) {
  const { name, position, image } = boardMember;

  return (
    <Container>
      <NextImage
        src={image.url}
        width={image.width}
        height={image.height}
        layout="responsive"
      />
      <H2>{position}</H2>
      <Position>{name}</Position>
    </Container>
  );
}

export default BoardMember;

const Container = styled.article``;

const H2 = styled.h2`
  color: var(--main-color);
  text-transform: uppercase;
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;

const Position = styled.p``;
