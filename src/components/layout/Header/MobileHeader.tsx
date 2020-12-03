import styled from "styled-components";
import NextLink from "next/link";
import { colors } from "styles/colors";

type MobileHeaderProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  headerIsVisible: boolean;
};

export function MobileHeader({
  open,
  setOpen,
  headerIsVisible,
}: MobileHeaderProps) {
  return (
    <Header headerIsVisible={headerIsVisible}>
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
  );
}

const Header = styled.header<{ headerIsVisible: boolean }>`
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

const Span = styled.span<{ open: boolean }>`
  opacity: ${({ open }) => (open ? 0 : 1)};
  transition: all 0.3s ease-in-out;
  color: white;
  line-height: 1rem;
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
