import React from "react";
import styled from "styled-components";
import SingleBlogPost from "./SingleBlogPost";
import { colors } from "styles/colors";
import { Posts } from "types/posts";

type NewsContainerProps = {
  posts: Posts;
};

function NewsContainer({ posts }: NewsContainerProps) {
  return (
    <Wrapper>
      <Headline>News</Headline>
      <Container>
        {posts.slice(1).map((post, index) => (
          <SingleBlogPost key={index} index={index} post={post} />
        ))}
      </Container>
    </Wrapper>
  );
}
export default NewsContainer;

const Wrapper = styled.div`
  display: grid;
  grid-area: newscontainer;
`;

const Container = styled.div`
  padding: 1rem 0.5rem 2rem;
  background: white;
  border-bottom: 0.25rem solid ${colors.main.default};
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
  text-align: center;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;
