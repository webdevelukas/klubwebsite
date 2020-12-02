import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "styles/colors";

type NavigationProps = {
  open: boolean;
};

function Navigation({ open }: NavigationProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && open) {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
    }
    if (typeof window !== "undefined" && !open) {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  return (
    <Nav open={open}>
      <ul>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>Hallo</li>
        <li>letzter</li>
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
