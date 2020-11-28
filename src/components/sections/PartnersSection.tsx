import styled from "styled-components";
import PartnerComponent from "../PartnerComponent";
import ComponentSection from "elements/ComponentSection";
import { Partners } from "types/partners";

type PartnersSectionProps = {
  partners: Partners;
};

function PartnersSection({ partners }: PartnersSectionProps) {
  return (
    <ComponentSection title="Unsere Partner">
      <Container>
        {partners.map((partner, index) => (
          <PartnerComponent key={index} partner={partner} />
        ))}
      </Container>
    </ComponentSection>
  );
}

export default PartnersSection;

const Container = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6.25rem, 1fr));
  grid-gap: 2rem;
`;
