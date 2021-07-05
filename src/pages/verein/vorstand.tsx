import styled from "styled-components";
import BoardMember from "components/BoardMember";
import graphCMS from "services/graphCMS";
import { Authors } from "types/author";

type VorstandsPageProps = {
  boardMembers: Authors;
};

function VorstandsPage({ boardMembers }: VorstandsPageProps) {
  return (
    <Container>
      <Headline>Vorstand</Headline>
      <Wrapper>
        {boardMembers.map((boardMember, index) => (
          <BoardMember key={index} boardMember={boardMember} />
        ))}
      </Wrapper>
    </Container>
  );
}

export async function getStaticProps() {
  const { authors: boardMembers } = await graphCMS(`{
    authors(where: {boardMember: true}) {
      name
      position
      boardMember
      image {
        url
        alt
        width
        height
      }
    }
  }
  `);
  return { props: { boardMembers } };
}

export default VorstandsPage;

const Container = styled.div`
  background: white;
  padding: 2rem 1rem 4rem;
  border-bottom: 0.25rem solid var(--main-color);
`;
const Headline = styled.h1`
  color: var(--main-color);
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
