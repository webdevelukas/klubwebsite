import styled from "styled-components";
import { Posts } from "types/posts";
import BlogPostSmall from "./BlogPostSmall";

type BlogPostsProps = {
  posts: Posts;
};

function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <Article>
      <Headline>Meistgesehene Artikel</Headline>
      <Container>
        {posts.slice(0, 3).map((post, index) => (
          <BlogPostSmall key={index} post={post} />
        ))}
      </Container>
    </Article>
  );
}

export default BlogPosts;

const Article = styled.article`
  position: relative;
  display: grid;
  grid-area: blogposts;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: var(--main-color);
  text-align: center;
  margin-bottom: 1rem;
`;
