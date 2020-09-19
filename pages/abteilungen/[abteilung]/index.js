import React from "react";
import PropTypes from "prop-types";
import BlogPost from "components/BlogPost";
import NewsContainer from "components/NewsContainer";
import styled from "styled-components";
import { colors } from "styles/colors";
import EventsSection from "components/sections/EventsSection";
DepartmentPage.propTypes = {};
function DepartmentPage({ department }) {
  return (
    <>
      <Headline>Abteilung {department}</Headline>
      <BlogPost />
      <NewsContainer />
    </>
  );
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { department: "fussball" } },
      { params: { department: "tennis" } },
      { params: { department: "gymnastik" } },
      { params: { department: "stockschiessen" } },
    ],
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { department } = params;
  return { props: { department } };
}
export default DepartmentPage;
const Headline = styled.h1`
  color: ${colors.main.default};
  margin: 1.5rem 1rem 1rem;
  text-transform: capitalize;
`;
