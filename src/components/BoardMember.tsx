import styled from "styled-components";
import ResponsiveImage from "elements/ResponsiveImage";
import { colors } from "styles/colors";

type BoardMemberProps = {
  boardMember: string;
};

function BoardMember({ boardMember }: BoardMemberProps) {
  return (
    <Container>
      <Image src={boardMember} />
      <H2>1. Vorstand</H2>
      <Position>Marco Katthagen</Position>
    </Container>
  );
}

export default BoardMember;

const Container = styled.article``;

const Image = styled(ResponsiveImage)`
  height: auto;
`;

const H2 = styled.h2`
  color: ${colors.main.default};
  text-transform: uppercase;
  line-height: 1.5rem;
`;

const Position = styled.p``;
