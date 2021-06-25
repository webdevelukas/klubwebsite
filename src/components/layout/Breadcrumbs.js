import React from "react";
import styled from "styled-components";
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
  background: var(--highlight-color);
  padding: 0.25rem 0.75rem;
`;
const Small = styled.small`
  display: flex;
  flex-wrap: wrap;
`;
const Link = styled.a`
  color: var(--main-color);
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
