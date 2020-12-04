import useScrollPosition from "hooks/useScrollPosition";
import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "styles/colors";
import NextLink from "next/link";

type NavigationProps = {
  open: boolean;
};

function Navigation({ open }: NavigationProps) {
  const { scrollPosition } = useScrollPosition();

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
      <ul>
        <li>
          <NextLink href="/verein/vorstand" passHref>
            <a>Link </a>
          </NextLink>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;

const Nav = styled.nav<{ open: boolean }>`
  z-index: 1002;
  position: fixed;
  top: 0;
  padding-top: ${({ open }) => (open ? "4.5rem" : null)};
  bottom: 0;
  width: 100%;
  background-color: ${colors.neutral};
  max-height: ${({ open }) => (open ? "100%" : 0)};
  transition: all 0.3s ease-in-out;
  overflow-y: auto;
`;
