import styled from "styled-components";

function Datenschutz() {
  const title = "Datenschutz";
  return (
    <Container>
      <TextContainer>
        <Headline>{title}</Headline>
      </TextContainer>
    </Container>
  );
}
export default Datenschutz;

export async function getStaticProps() {
  return { props: {} };
}

const Container = styled.div`
  background: white;
  padding: 2rem 0 4rem;
  border-bottom: 0.25rem solid var(--main-color);
`;
const Headline = styled.h1`
  color: var(--main-color);
  margin-bottom: 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
`;
const TextContainer = styled.div`
  padding: 1rem 2rem 0;
`;
