import BlogPost from "components/BlogPost";
import EventBoxes from "components/Events/EventBoxes";
import NewsContainer from "components/NewsContainer";
import { Posts } from "types/posts";
import { Events } from "types/events";
import graphCMS from "services/graphCMS";
import styled from "styled-components";

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
      <AdContainer>AdContainer</AdContainer>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const data = await graphCMS(`{
    posts(orderBy: createdAt_DESC) {
      id
      title
      titleimage {
        url
        alt
      }
      event {
        dateandtime
      }
      department {name}
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
    "adcontainer";
  grid-gap: 2rem;

  @media screen and (min-width: 1100px) {
    margin-top: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "blogpost blogpost newscontainer"
      "blogpost blogpost newscontainer"
      "eventboxes eventboxes adcontainer";
  }
`;

const AdContainer = styled.aside`
  background: rgb(7, 31, 18);
  grid-area: adcontainer;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
`;
