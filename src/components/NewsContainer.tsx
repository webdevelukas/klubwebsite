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
