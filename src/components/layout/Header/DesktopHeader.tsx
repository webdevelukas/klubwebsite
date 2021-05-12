import styled from "styled-components";
import NextLink from "next/link";
import { colors } from "styles/colors";
import { useState } from "react";
import BecomeMember from "components/BecomeMember";

type DesktopHeaderProps = {
  headerIsVisible: boolean;
};

export function DesktopHeader({ headerIsVisible }: DesktopHeaderProps) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <Header headerIsVisible={headerIsVisible}>
      <GridContainer>
        <NextLink href="/" passHref>
          <a>
            <Logo src="/tsv-paunzhausen.png" alt="club logo" />
          </a>
        </NextLink>
        <H2>TSV Paunzhausen</H2>
        <Nav onMouseLeave={() => setShowSubmenu(false)}>
          <List>
            <li onMouseEnter={() => setShowSubmenu(true)}>
              Klub
              {showSubmenu && (
                <SubMenu
                  showSubmenu={showSubmenu}
                  onMouseLeave={() => setShowSubmenu(false)}
                >
                  <List>
                    <li>Klub</li>
                    <li>Abteilungen</li>
                    <li>Termine</li>
                    <li>Shop</li>
                    <li>Jobs</li>
                    <li>Partner</li>
                  </List>
                </SubMenu>
              )}
            </li>
            <li>Abteilungen</li>
            <li>Termine</li>
            <li>Shop</li>
            <li>Jobs</li>
            <li>Partner</li>
          </List>
        </Nav>
        <Wrapper>
          <p>
            Mitglieder Login <img src="/member-login.png" />
          </p>
          <BecomeMember />
        </Wrapper>
      </GridContainer>
    </Header>
  );
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  grid-column-gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: 100%;
  align-items: center;

  button {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  p {
    color: white;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  img {
    margin-left: 0.5rem;
  }
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const SubMenu = styled.div<{ showSubmenu: boolean }>`
  position: absolute;
  max-height: ${({ showSubmenu }) => (showSubmenu ? "auto" : 0)};
  bottom: 0;
  left: 0;
  background: aquamarine;
  transform: translate(0, 100%);
  width: 100%;
  overflow: hidden;

  transition: all 0.3ms ease-in-out;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  color: white;
  font-weight: bold;
  font-size: 1.25rem;

  li {
    margin-right: 1.25rem;
  }
`;

const Header = styled.header<{ headerIsVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 6.5rem;
  padding: 0 0.75rem;
  z-index: 2000;
  transition: all 150ms ease-in-out;
  background: ${colors.main.default};
  box-shadow: 0 0.25rem 0 ${colors.main.shadow};
  top: 0;

  visibility: ${({ headerIsVisible }) =>
    headerIsVisible ? "visible" : "hidden"};
  transform: ${({ headerIsVisible }) =>
    headerIsVisible ? "none" : "translate(0, -100%)"};
`;

const Logo = styled.img`
  display: block;
  width: auto;
  height: 5rem;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  color: white;
  text-transform: uppercase;
`;
