import styled from "styled-components";
import BoardMember from "components/BoardMember";
import graphCMS from "services/graphCMS";
import { Authors } from "types/author";

type VorstandsPageProps = {
  boardMembers: Authors;
};

function VorstandsPage({ boardMembers }: VorstandsPageProps) {
  return (
    <PageWrapper>
      <Container>
        <Headline>Vorstand</Headline>
        <Wrapper>
          {boardMembers.map((boardMember, index) => (
            <BoardMember key={index} boardMember={boardMember} />
          ))}
        </Wrapper>
      </Container>
    </PageWrapper>
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

const PageWrapper = styled.div`
  background-color: var(--content-background);
`;

const Container = styled.div`
  padding: var(--large-spacing) var(--medium-spacing) var(--extra-large-spacing);
  margin: 0 auto;
  max-width: var(--max-content-width);
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
