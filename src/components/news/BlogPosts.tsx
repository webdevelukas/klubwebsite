import styled from "styled-components";
import { colors } from "styles/colors";
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
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
  text-align: center;
  margin-bottom: 1rem;
`;
