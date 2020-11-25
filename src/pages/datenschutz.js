import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "styles/colors";
import { getSingleType } from "lib/api";
import markdownToHtml from "lib/markdownToHtml.js";
Datenschutz.propTypes = {};
function Datenschutz({ content }) {
  const title = "Datenschutz";
  return (
    <Container>
      <TextContainer>
        <Headline>{title}</Headline>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </TextContainer>
    </Container>
  );
}
export default Datenschutz;
export const getStaticProps = async () => {
  const data = await getSingleType("datenschutz");
  const content = await markdownToHtml(data?.content || "");
  // const title = data.title;
  return { props: { content } };
};
const Container = styled.div`
  background: white;
  padding: 2rem 0 4rem;
  border-bottom: 0.25rem solid ${colors.main.default};
`;
const Headline = styled.h1`
  color: ${colors.main.default};
  margin-bottom: 1rem;
  line-height: 2.25rem;
  text-transform: uppercase;
`;
const TextContainer = styled.div`
  padding: 1rem 2rem 0;
`;
const Content = styled.div`
  margin-bottom: 1rem;
`;
