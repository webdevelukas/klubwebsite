import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SingleBlogPost from "./SingleBlogPost";
import { colors } from "styles/colors";

NewsContainer.propTypes = {};

function NewsContainer({ posts }) {
  return (
    <Container>
      {posts.map((post, index) => (
        <SingleBlogPost key={index} index={index} post={post} />
      ))}
    </Container>
  );
}
export default NewsContainer;

const Container = styled.div`
  padding: 1rem 0.5rem 2rem;
  background: white;
  border-bottom: 0.25rem solid ${colors.main.default};
`;
