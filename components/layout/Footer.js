import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import BecomeAMember from "../BecomeAMember";
import { colors } from "styles/colors";
import LinkList from "../LinkList";
import ResponsiveImage from "../../elements/ResponsiveImage";
import PartnersSection from "../sections/PartnersSection";
import NextLink from "next/link";
Footer.propTypes = {};
function Footer(props) {
  return (
    <Container>
      <BecomeAMember />
      <FooterContainer>
        <LinkList />
        <Image src="/bolzplatz-bambule.png" />
        <Small>
          <NextLink href="/impressum">
            <a>Impressum</a>
          </NextLink>{" "}
          /{" "}
          <NextLink href="/datenschutz">
            <a>Datenschutz</a>
          </NextLink>
        </Small>
      </FooterContainer>
    </Container>
  );
}
export default Footer;
const Container = styled.div`
  margin-top: 6rem;
  a {
    color: white;
  }
`;
const FooterContainer = styled.footer`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  grid-gap: 2rem;
  padding: 1.5rem 3rem;
  background: ${colors.main.default};
  color: white;
`;
const Small = styled.small`
  text-align: center;
`;
const Image = styled(ResponsiveImage)`
  height: 4.5rem;
  object-fit: contain;
`;
