import styled from "styled-components";
import PartnerComponent from "./PartnerComponent";
import { Partners } from "types/partners";
import { colors } from "styles/colors";

type PartnersSectionProps = {
  partners: Partners;
};

function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <Wrapper>
      <Headline>Unsere Partner</Headline>
      <Container>
        {partners.map((partner, index) => (
          <PartnerComponent key={index} partner={partner} />
        ))}
      </Container>
    </Wrapper>
  );
}

export default PartnersSection;

const Container = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-gap: 2rem;
  max-width: var(--max-content-width);
  margin: 0 auto;
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
  text-align: center;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  margin-top: 8rem;
`;
