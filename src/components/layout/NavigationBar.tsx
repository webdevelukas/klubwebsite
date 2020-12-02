import styled from "styled-components";
import { colors } from "styles/colors";
import NextLink from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { useRouter } from "next/router";
import useScrollPosition from "hooks/useScrollPosition";
import { useEffect } from "react";

type NavigationBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

function NavigationBar({ open, setOpen }: NavigationBarProps) {
  const {
    headerIsVisible,
    scrollPositionIsNearTopOfPage,
  } = useScrollPosition();

  const router = useRouter();
  const breadcrumbs = router.asPath.split("/");
  return (
    <Wrapper>
      <Header open={open} headerIsVisible={headerIsVisible}>
        <NextLink href="/" passHref>
          <a>
            <Logo src="/tsv-paunzhausen.png" alt="club logo" />
          </a>
        </NextLink>
        <H2>TSV Paunzhausen</H2>
        <MenuButton open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <Span open={open}>Menü</Span>
        </MenuButton>
      </Header>
      {/* {router.route !== "/" && (
        <Breadcrumbs breadcrumbs={breadcrumbs} route={router.route} />
      )} */}
    </Wrapper>
  );
}
export default NavigationBar;

const Wrapper = styled.div`
  position: relative;
  margin-bottom: 4.5rem;

  @media screen and (min-width: 1100px) {
    margin-bottom: 6.5rem;
  }
`;

const Header = styled.header<{ open: boolean; headerIsVisible: boolean }>`
  position: fixed;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  grid-column-gap: 1rem;
  width: 100%;
  height: 4.5rem;
  padding: 0 0.75rem;
  background: ${colors.main.default};
  box-shadow: 0 0.25rem 0 ${colors.main.shadow};
  z-index: 2000;
  transition: all 150ms ease-in-out;
  top: 0;

  visibility: ${({ headerIsVisible }) =>
    headerIsVisible ? "visible" : "hidden"};
  transform: ${({ headerIsVisible }) =>
    headerIsVisible ? "none" : "translate(0, -100%)"};
`;

const Logo = styled.img`
  display: block;
  width: auto;
  height: 3rem;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
`;

const MenuButton = styled.button<{ open: boolean }>`
  display: grid;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  div {
    width: 100%;
    height: 0.25rem;
    background: white;
    transition: all 0.3s ease-in-out;

    :first-child {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateX(12px) translateY(12px)" : "rotate(0)"};
    }

    :nth-child(2) {
      transform: ${({ open }) =>
        open ? "rotate(-45deg) translateX(-6px) translateY(5px)" : "rotate(0)"};
    }
  }
`;

const Span = styled.span<{ open: boolean }>`
  opacity: ${({ open }) => (open ? 0 : 1)};
  transition: all 0.3s ease-in-out;
  color: white;
  line-height: 1rem;
`;
