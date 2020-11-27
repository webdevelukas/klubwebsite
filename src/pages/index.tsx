import BlogPost from "components/BlogPost";
import EventsSection from "components/sections/EventsSection";
import Section from "elements/Section";
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
      <EventsSection events={events} />
      <Section title="News">
        <NewsContainer posts={posts} />
      </Section>
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
