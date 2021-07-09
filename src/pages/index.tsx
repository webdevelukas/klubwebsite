import type { Posts, Events } from "types";
import graphCMS from "services/graphCMS";
import styled from "styled-components";
import NewsletterContainer from "components/NewsletterContainer";
import BlogPosts from "components/news/BlogPosts";
import EventBoxes from "components/events/EventBoxes";
import HeroNewsGrid from "components/news/HeroNewsGrid";

type HomePageProps = {
  posts: Posts;
  events: Events;
};

function HomePage({ posts, events }: HomePageProps) {
  return (
    <PageLayout>
      <HeroNewsGrid posts={posts} />
      <ContentLayout>
        <EventBoxes events={events} />
        <NewsletterContainer />
        <BlogPosts posts={posts} />
      </ContentLayout>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await graphCMS(`{
    posts(orderBy: createdAt_DESC) {
      slug
      title
      titleimage {
        url
        alt
      }
      event {
        dateandtime
      }
      department {
        name
        uid
      }
      groups {name}
      createdAt
      content {html}
    }
    events(orderBy: dateandtime_ASC) {
      title
      dateandtime
      department {name}
      group {
        name
      }
    }
  }`);
  const { posts, events } = data;
  return { props: { posts, events } };
}

export default HomePage;

const PageLayout = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: auto;
  row-gap: var(--large-spacing);
`;

const ContentLayout = styled.div`
  display: grid;
  grid-template-areas:
    "eventboxes"
    "newscontainer"
    "newslettercontainer"
    "blogposts";
  grid-gap: 2rem;
  margin: 0 auto;
  max-width: var(--max-content-width);

  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto auto auto;
    grid-template-areas:
      "eventboxes eventboxes eventboxes"
      "newslettercontainer newslettercontainer newslettercontainer"
      "blogposts blogposts blogposts";
  }
`;
