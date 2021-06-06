import styled from "styled-components";

type SubmenuProps = {
  showSubmenu: boolean;
  onMouseLeave: () => void;
};

function Submenu({ showSubmenu }: SubmenuProps) {
  return (
    <Container showSubmenu={showSubmenu}>
      <GridContainer>
        <Wrapper>
          <MainLink>Fußball</MainLink>
          <SubLink>1. Mannschaft</SubLink>
          <SubLink>2. Mannschaft</SubLink>
          <SubLink>U15-Junioren</SubLink>
          <SubLink>U13-Junioren</SubLink>
          <SubLink>U11-Junioren</SubLink>
          <SubLink>U11-Junioren II</SubLink>
          <SubLink>U9-Junioren</SubLink>
          <SubLink>U7-Junioren</SubLink>
          <SubLink>Alte Herren</SubLink>
        </Wrapper>
        <Wrapper>
          <MainLink>Tennis</MainLink>
          <SubLink>1. Mannschaft</SubLink>
          <SubLink>2. Mannschaft</SubLink>
          <SubLink>U15-Junioren</SubLink>
          <SubLink>U13-Junioren</SubLink>
        </Wrapper>
        <Wrapper>
          <MainLink>Theatergruppe</MainLink>
          <SubLink>Aktuell</SubLink>
          <SubLink>Chronik</SubLink>
        </Wrapper>
      </GridContainer>
    </Container>
  );
}

export default Submenu;

const Container = styled.div<{ showSubmenu: boolean }>`
  position: absolute;
  max-height: ${({ showSubmenu }) => (showSubmenu ? "auto" : 0)};
  bottom: 0;
  left: 0;
  background: white;
  transform: translate(0, 100%);
  width: 100%;
  overflow: hidden;
  transition: all 0.3ms ease-in-out;
  box-shadow: 0 0.25rem 0 rgba(var(--main-color), 0.15);
`;

const GridContainer = styled.div`
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-gap: 1.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const MainLink = styled.a`
  font-weight: bold;
`;
const SubLink = styled.a`
  border-bottom: 1px solid lightgray;
`;
