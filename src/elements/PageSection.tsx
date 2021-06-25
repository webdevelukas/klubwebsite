import styled from "styled-components";

type Props = {
  title: string;
  children: JSX.Element;
};

function PageSection({ title, children }: Props) {
  return (
    <section>
      <H3>{title}</H3>
      {children}
    </section>
  );
}

export default PageSection;

const H3 = styled.h3`
  background-color: var(--content-background);
  padding: var(--medium-spacing) 0;
  color: var(--main-color);
  text-transform: uppercase;
  font-size: 1.25rem;
  text-align: center;

  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;
