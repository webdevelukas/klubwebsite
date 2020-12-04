import styled from "styled-components";
import { colors } from "styles/colors";

function NewsletterContainer() {
  return (
    <Container>
      <Headline>Jetzt für den Newsletter anmelden:</Headline>
      <Input placeholder="E-Mail" id="email" />

      <Button>Jetzt anmelden</Button>
    </Container>
  );
}

export default NewsletterContainer;

const Container = styled.section`
  display: grid;
  grid-area: newslettercontainer;
  background-color: ${colors.main.default};
  padding: 2rem;
  box-shadow: 0 0.25rem 0 ${colors.main.shadow};

  grid-row-gap: 1rem;

  @media screen and (min-width: 1100px) {
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
  }
`;

const Headline = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: uppercase;
  justify-self: center;
  color: white;
  text-align: center;
  align-self: center;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  min-width: 300px;
  box-shadow: 0 0.25rem 0 ${colors.secondary};
`;

const Button = styled.button`
  background-color: white;
  color: ${colors.secondary};
  font-weight: bold;
  padding: 0.5rem 1rem;
  box-shadow: 0 0.25rem 0 ${colors.secondary};
`;
