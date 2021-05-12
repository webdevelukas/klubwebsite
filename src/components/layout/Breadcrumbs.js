import React from "react";
import styled from "styled-components";
import { colors } from "styles/colors";
import NextLink from "next/link";
function Breadcrumbs({ breadcrumbs, route }) {
  return (
    <Container>
      <Small>
        {breadcrumbs &&
          breadcrumbs.map((breadcrumb, index) => {
            return (
              <NextLink key={index} href="/">
                <Link>
                  {breadcrumb === "" ? "tsvpaunzhausen.de" : breadcrumb}
                </Link>
              </NextLink>
            );
          })}
      </Small>
    </Container>
  );
}
export default Breadcrumbs;
const Container = styled.div`
  background: ${colors.secondary};
  padding: 0.25rem 0.75rem;
`;
const Small = styled.small`
  display: flex;
  flex-wrap: wrap;
`;
const Link = styled.a`
  color: ${colors.main.default};
  ::after {
    margin: 0 0.5rem;
    content: ">";
  }
  :last-of-type {
    ::after {
      content: "";
    }
  }
`;
