import styled from "styled-components";
import List from "../../elements/List";
import PageSection from "../../elements/PageSection";
import { Posts } from "../../types";
import NewsTeaserItem from "./NewsTeaserItem";
import NewsListItem from "./NewsListItem";

export type NewsListContainerProps = {
  posts: Posts;
  title?: string;
  withoutTeaser?: boolean;
  gridArea?: string;
};
function NewsContainer({
  posts,
  title,
  withoutTeaser,
  gridArea,
}: NewsListContainerProps) {
  const newestPost = posts[0];
  const slicedPosts = withoutTeaser ? posts.slice(0, 4) : posts.slice(1, 4);

  return (
    <PageSection title={title} gridArea={gridArea}>
      <>
        {posts.length === 0 && (
          <NoNewsMessage>
            Sorry, but there is nothing we can talk about.
          </NoNewsMessage>
        )}
        {posts.length > 0 && (
          <List>
            {!withoutTeaser && <NewsTeaserItem post={newestPost} />}
            {slicedPosts.map((post, index) => (
              <NewsListItem key={index} post={post} />
            ))}
          </List>
        )}
      </>
    </PageSection>
  );
}

export default NewsContainer;

const NoNewsMessage = styled.p`
  background-color: var(--content-background-alternative);
  padding: var(--medium-spacing);
  text-align: center;
`;
