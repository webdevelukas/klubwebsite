import BlogPost from "components/BlogPost";
import EventBoxes from "components/Events/EventBoxes";
import ComponentSection from "elements/ComponentSection";
import NewsContainer from "components/NewsContainer";
import { Posts } from "types/posts";
import { Events } from "types/events";
import graphCMS from "services/graphCMS";

type HomePageProps = {
  posts: Posts;
  events: Events;
};

function HomePage({ posts, events }: HomePageProps) {
  return (
    <>
      <BlogPost posts={posts} />
      <EventBoxes events={events} />
      <ComponentSection title="News">
        <NewsContainer posts={posts} />
      </ComponentSection>
    </>
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
