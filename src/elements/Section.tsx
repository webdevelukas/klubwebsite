import styled from "styled-components";
import { colors } from "styles/colors";

type SectionProps = {
  title?: string;
  children: React.ReactNode;
};

function Section({ title, children }: SectionProps) {
  return (
    <SectionStyled>
      {title && <Headline>{title}</Headline>}
      {children}
    </SectionStyled>
  );
}
export default Section;

const SectionStyled = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
`;
