import styled from "styled-components";
import { colors } from "styles/colors";

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
  border-bottom: 0.25rem solid ${colors.main.default};
`;
const Headline = styled.h1`
  color: ${colors.main.default};
  margin-bottom: 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
`;
const TextContainer = styled.div`
  padding: 1rem 2rem 0;
`;
