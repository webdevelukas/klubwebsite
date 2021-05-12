import BlogPost from "components/news/BlogPost";
import NewsContainer from "components/news/NewsContainer";
import type { Posts, Events } from "types";
import graphCMS from "services/graphCMS";
import styled from "styled-components";
import NewsletterContainer from "components/NewsletterContainer";
import BlogPosts from "components/news/BlogPosts";
import EventBoxes from "components/events/EventBoxes";
import NextImage from "next/image";

type HomePageProps = {
  posts: Posts;
  events: Events;
};

function HomePage({ posts, events }: HomePageProps) {
  return (
    <PageLayout>
      <BlogPost posts={posts} />
      <EventBoxes events={events} />
      <NewsContainer posts={posts} />
      <AdContainer>
        <NextImage
          src="/deinklub-ad2.png"
          width="376"
          height="152"
          quality={100}
        />
      </AdContainer>
      <NewsletterContainer />
      <BlogPosts posts={posts} />
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
    }
    events(orderBy: dateandtime_ASC) {
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
  grid-template-areas:
    "blogpost"
    "eventboxes"
    "newscontainer"
    "adcontainer"
    "newslettercontainer"
    "blogposts";
  grid-gap: 2rem;

  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto auto auto;
    grid-template-areas:
      "blogpost blogpost adcontainer"
      "blogpost blogpost newscontainer"
      "eventboxes eventboxes newscontainer"
      "newslettercontainer newslettercontainer newslettercontainer"
      "blogposts blogposts blogposts";
  }
`;

const AdContainer = styled.aside`
  background: rgb(7, 31, 18);
  grid-area: adcontainer;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
`;
