import styled from "styled-components";
import { colors } from "styles/colors";
import BoardMember from "components/BoardMember";

const boardMembers = [
  "https://www.tsvpaunzhausen.de/files/5614/9493/6711/Katthagen.jpg",
  "https://www.tsvpaunzhausen.de/files/9914/9493/7771/Platzhalter.jpg",
  "https://www.tsvpaunzhausen.de/files/3814/9493/6624/Wrobel.jpg",
  "https://www.tsvpaunzhausen.de/files/8014/9493/6710/Gerold.jpg",
  "https://www.tsvpaunzhausen.de/files/5314/9493/6710/Beck.jpg",
];

function VorstandsPage() {
  return (
    <Container>
      <Headline>Vorstand</Headline>
      <Wrapper>
        {boardMembers.map((boardMember) => (
          <BoardMember key={boardMember} boardMember={boardMember} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default VorstandsPage;

const Container = styled.div`
  background: white;
  padding: 2rem 1rem 4rem;
  border-bottom: 0.25rem solid ${colors.main.default};
`;
const Headline = styled.h1`
  color: ${colors.main.default};
  margin-bottom: 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-auto-rows: 1fr;
  grid-auto-flow: row;
  grid-gap: 2rem;
`;
