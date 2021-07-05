import styled from "styled-components";

type PageSectionProps = {
  title?: string;
  children: JSX.Element | JSX.Element[];
  gridArea?: string;
};

function PageSection({ title, children, gridArea }: PageSectionProps) {
  return (
    <Section gridArea={gridArea}>
      {title && <H3>{title}</H3>}
      {children}
    </Section>
  );
}

export default PageSection;

const Section = styled.section<{ gridArea?: string }>`
  grid-area: ${({ gridArea }) => gridArea};
  box-shadow: 0 0.25rem 0 var(--main-color-shadow);
`;

const H3 = styled.h3`
  background-color: var(--content-background);
  padding: var(--large-spacing) 0 var(--small-spacing);
  color: var(--main-color);
  text-transform: uppercase;
  font-size: 1.25rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
