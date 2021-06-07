import useScrollPosition from "hooks/useScrollPosition";
import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "styles/colors";
import NextLink from "next/link";
import mainNavItems from "api/mainNavItems";

type NavigationProps = {
  open: boolean;
};

function Navigation({ open }: NavigationProps) {
  const { scrollPosition } = useScrollPosition();
  const navItemsWithSublinks = mainNavItems.filter(
    ({ submenuItems }) => submenuItems.length > 0
  );
  const navItemsWithoutSublinks = mainNavItems.filter(
    ({ submenuItems }) => submenuItems.length === 0
  );

  useEffect(() => {
    const body = document.body;

    if (typeof window !== "undefined" && open) {
      body.style.position = "fixed";
      body.style.top = `-${scrollPosition}px`;
    }
    if (typeof window !== "undefined" && !open) {
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  return (
    <Nav open={open}>
      <GridContainer>
        {navItemsWithSublinks.map(({ url, title, submenuItems }, index) => (
          <Category key={index}>
            <NextLink href={url}>
              <Title>{title}</Title>
            </NextLink>
            <SubmenuItems>
              {submenuItems?.map(
                (item: { url: string; title: string }, index: number) => (
                  <NextLink key={index} href={item.url} passHref>
                    <SubmenuItem>{item.title}</SubmenuItem>
                  </NextLink>
                )
              )}
            </SubmenuItems>
          </Category>
        ))}
        <Category>
          <Title>Allgemein</Title>
          <LinkList>
            {navItemsWithoutSublinks.map(({ url, title }, index) => (
              <NextLink key={index} href={url} passHref>
                <Container>{title}</Container>
              </NextLink>
            ))}
          </LinkList>
        </Category>
      </GridContainer>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav<{ open: boolean }>`
  z-index: 1002;
  position: fixed;
  top: 0;
  padding-top: ${({ open }) => (open ? "7.5rem" : null)};
  bottom: 0;
  width: 100%;
  background-color: ${colors.neutral};
  max-height: ${({ open }) => (open ? "100%" : 0)};
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
`;

const GridContainer = styled.div`
  display: grid;
  grid-auto-rows: minmax(2rem, auto);
  grid-auto-flow: row;
  grid-row-gap: 1.5rem;
  align-content: start;
  padding: 0 1rem 2rem;
`;

const Category = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 3rem auto;
`;

const LinkList = styled.div`
  display: grid;
  grid-auto-rows: 5rem;
  grid-auto-flow: auto;
  border-bottom: 0.25rem solid rgb(var(--secondary-color));
`;

const Container = styled.a`
  background: white;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  :not(:last-of-type) {
    border-bottom: 1px solid lightgray;
  }
`;

const Title = styled.a`
  justify-self: center;
  align-self: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: rgb(var(--main-color));
`;

const SubmenuItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: 6rem;
  grid-auto-flow: row;
  grid-gap: 0.5rem;
`;

const SubmenuItem = styled.a`
  background: white;
  border-bottom: 0.25rem solid rgb(var(--secondary-color));
  padding: 0.5rem;
`;
