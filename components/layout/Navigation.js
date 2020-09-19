import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "styles/colors";
import LinkListItem from "components/LinkListItem";
import NextLink from "next/link";
Navigation.propTypes = {};
const linkList = [
  {
    title: "Abteilungen",
    items: ["Fußball", "Tennis", "Gymnastik", "Stockschschießen"],
  },
  {
    title: "Starkbierfest",
    items: ["Chronik", "Tickets"],
  },
  {
    title: "Verein",
    items: [
      "Aktuelle Termine",
      "Vorstandschaft",
      "Kontakt",
      "Anfahrt",
      "Satzung",
      "Vereinszeitung",
    ],
  },
];
const teams = [
  "herren-1",
  "2. Mannschaft",
  "U15-Junioren",
  "U13-Junioren",
  "U11-Junioren",
  "U9-Junioren",
  "U7-Junioren",
  "Alte Herren",
];
function Navigation({ open, setOpen }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      {/* {open && <BackgroundOverlay />} */}
      <Nav open={open}>
        <Wrapper>
          <Headline>Menü </Headline>
          <MenuBurger onClick={() => setOpen(false)}>Close</MenuBurger>
        </Wrapper>
        <TopLinkList>
          {!showSubMenu &&
            linkList.map(({ title, items }, index) => (
              <React.Fragment key={title}>
                <Container onClick={() => setActiveIndex(index)}>
                  <ListItem>{title}</ListItem>
                  <ToggleButton>{">"}</ToggleButton>
                </Container>
                {activeIndex === index && (
                  <SubLinkList>
                    {items.map((item) => (
                      <ListItem key={item} onClick={() => setShowSubMenu(true)}>
                        {item}
                      </ListItem>
                    ))}
                  </SubLinkList>
                )}
              </React.Fragment>
            ))}
          {showSubMenu &&
            teams.map((team) => <ListItem key={team}>{team}</ListItem>)}
        </TopLinkList>
        {showSubMenu && (
          <ListItem onClick={() => setShowSubMenu(false)}>Zurück</ListItem>
        )}
        <Small>
          <NextLink href="/impressum">
            <a>Impressum</a>
          </NextLink>{" "}
          /{" "}
          <NextLink href="/datenschutz">
            <a>Datenschutz</a>
          </NextLink>
        </Small>
      </Nav>
    </>
  );
}
export default Navigation;
const BackgroundOverlay = styled.div`
  z-index: 1000;
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: ${colors.main.overlay};
  top: 0;
  bottom: 0;
`;
const Nav = styled.nav`
  z-index: 1001;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-bottom: 4rem;
  width: 100vw;
  height: 100vh;
  background: ${colors.main.default};
  overflow: auto;
  /* Open/Close Animation */
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`;
const TopLinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const SubLinkList = styled.ul`
  padding: 0;
  list-style: none;
  font-weight: 100;
  > li {
    background: rgb(240, 240, 240);
  }
`;
const ListItem = styled.li`
  background: white;
  width: 100%;
  height: auto;
  padding: 1.5rem 1rem;
  color: ${colors.main.default};
  margin-bottom: 1px;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-column-gap: 1px;
  margin-bottom: 1px;
  > li {
    margin: 0;
  }
`;
const ToggleButton = styled.button`
  background: white;
  color: ${colors.main.default};
`;
const Headline = styled.h2`
  color: white;
  text-transform: uppercase;
`;
const MenuBurger = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0 0.75rem;
  margin: 1.5rem 0 3rem;
`;
const Small = styled.small`
  text-align: center;
`;
