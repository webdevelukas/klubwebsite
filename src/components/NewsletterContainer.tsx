import styled from "styled-components";
import { colors } from "styles/colors";

function NewsletterContainer() {
  return (
    <Container>
      <Headline>Jetzt für den Newsletter anmelden:</Headline>
      <input></input>
      <button>Anmelden</button>
    </Container>
  );
}

export default NewsletterContainer;

const Container = styled.section`
  display: grid;
  grid-area: newslettercontainer;
  background-color: ${colors.secondary};
  padding: 2rem;
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: white;
  text-align: center;
  margin-bottom: 1rem;
`;
