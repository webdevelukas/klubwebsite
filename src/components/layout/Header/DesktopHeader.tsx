import styled from "styled-components";
import NextLink from "next/link";
import { useState } from "react";
import BecomeMember from "components/BecomeMember";
import DesktopSubmenu from "./DesktopSubmenu";
import mainNavItems from "../../../api/mainNavItems";

type DesktopHeaderProps = {
  headerIsVisible: boolean;
};

type showSubmenuProps = {
  active: boolean;
  submenuItems: {
    url: string;
    title: string;
    links?: { url: string; title: string }[] | undefined;
  }[];
};

export function DesktopHeader({ headerIsVisible }: DesktopHeaderProps) {
  const [showSubmenu, setShowSubmenu] = useState<showSubmenuProps>({
    active: false,
    submenuItems: [],
  });

  return (
    <Header headerIsVisible={headerIsVisible}>
      <GridContainer>
        <NextLink href="/" passHref>
          <a>
            <Logo src="/tsv-paunzhausen.png" alt="club logo" />
          </a>
        </NextLink>
        <NextLink href="/" passHref>
          <ClubName>TSV Paunzhausen</ClubName>
        </NextLink>
        <Nav
          onMouseLeave={() =>
            setShowSubmenu({ active: false, submenuItems: [] })
          }
        >
          {mainNavItems.map(({ url, title, submenuItems }, index) => (
            <NextLink key={index} href={url}>
              <a
                onMouseEnter={() =>
                  setShowSubmenu({
                    active: true,
                    submenuItems: submenuItems,
                  })
                }
              >
                {title}
              </a>
            </NextLink>
          ))}
          {showSubmenu.active && showSubmenu.submenuItems?.length > 0 && (
            <DesktopSubmenu
              submenuItems={showSubmenu.submenuItems!}
              onMouseLeave={() =>
                setShowSubmenu({ active: false, submenuItems: [] })
              }
            />
          )}
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
  max-width: var(--max-content-width);
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
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-column-gap: 1.5rem;
  justify-content: left;
  align-items: center;
  padding: 0 2rem;

  > a {
    font-weight: bold;
    color: white;
    font-size: 1.25rem;
  }
`;

const Header = styled.header<{ headerIsVisible: boolean }>`
  position: fixed;
  width: 100%;
  height: 6.5rem;
  padding: 0 1rem;
  z-index: 2000;
  transition: all 150ms ease-in-out;
  background: var(--main-color);
  box-shadow: 0 0.25rem 0 var(--main-color-shadow);
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

const ClubName = styled.a`
  margin: 0;
  font-size: 1.5rem;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
`;
