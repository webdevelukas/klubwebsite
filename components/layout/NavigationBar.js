import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import NextLink from "next/link";
import Breadcrumbs from "./Breadcrumbs";
import { useRouter } from "next/router";
NavigationBar.propTypes = {};
function NavigationBar({ setOpen }) {
  const router = useRouter();
  const breadcrumbs = router.asPath.split("/");
  return (
    <>
      <ColoredBox />
      <Header>
        <NextLink href="/">
          <Link>
            <Logo src="/tsv-paunzhausen.png" alt="club logo" />
          </Link>
        </NextLink>
        <H2>TSV Paunzhausen</H2>
        <MenuBurger onClick={() => setOpen(true)}>Menü</MenuBurger>
      </Header>
      {/* {router.route !== "/" && (
        <Breadcrumbs breadcrumbs={breadcrumbs} route={router.route} />
      )} */}
    </>
  );
}
export default NavigationBar;
const ColoredBox = styled.div`
  width: 100vw;
  height: 0.25rem;
  background: ${colors.secondary};
`;
const Header = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 0 0.75rem 0 4.5rem;
  background: ${colors.main.default};
  box-shadow: 0 0.25rem 0 ${colors.main.shadow};
`;
const Link = styled.a`
  position: absolute;
  top: 0.5rem;
  left: 0.75rem;
`;
const Logo = styled.img`
  width: auto;
  height: 3rem;
`;
const H2 = styled.h2`
  margin: 0;
  font-size: 1rem;
  color: white;
  text-transform: uppercase;
`;
const MenuBurger = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
`;
