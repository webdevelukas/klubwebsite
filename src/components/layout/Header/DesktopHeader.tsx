import styled from "styled-components";
import NextLink from "next/link";
import { colors } from "styles/colors";
import { useState } from "react";

type DesktopHeaderProps = {
  headerIsVisible: boolean;
};

export function DesktopHeader({ headerIsVisible }: DesktopHeaderProps) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <Header headerIsVisible={headerIsVisible}>
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
                  <li>Starkbierfest</li>
                </List>
              </SubMenu>
            )}
          </li>
          <li>Abteilungen</li>
          <li>Termine</li>
          <li>Shop</li>
          <li>Jobs</li>
          <li>Partner</li>
          <li>Starkbierfest</li>
        </List>
      </Nav>
    </Header>
  );
}

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
  display: grid;
  grid-template-columns: auto auto 1fr;
  align-items: center;
  grid-column-gap: 1rem;
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
  height: 4rem;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1.75rem;
  color: white;
  text-transform: uppercase;
`;
