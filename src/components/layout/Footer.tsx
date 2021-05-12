import styled from "styled-components";
import BecomeAMember from "../BecomeAMember";
import { colors } from "styles/colors";
import LinkList from "../LinkList";
import NextLink from "next/link";

function Footer() {
  return (
    <Container>
      <BecomeAMember />
      <FooterContainer>
        <LinkList />
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
  margin-top: 4rem;
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
