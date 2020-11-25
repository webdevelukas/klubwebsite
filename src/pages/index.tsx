import BlogPost from "components/BlogPost";
import EventsSection from "components/sections/EventsSection";
import Section from "elements/Section";
import NewsContainer from "components/NewsContainer";
import { GraphQLClient } from "graphql-request";
import { Posts } from "types/posts";
import { GetStaticProps } from "next";
import { Events } from "types/events";

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

export const getStaticProps: GetStaticProps = async () => {
  const graphcms = new GraphQLClient(process.env.GRAPHCMS_API);
  const data = await graphcms.request(`{
    posts(orderBy: createdAt_ASC) {
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
};

export default HomePage;
