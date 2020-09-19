import BlogPost from "components/BlogPost";
import EventsSection from "components/sections/EventsSection";
import ComponentSection from "elements/Section";
import NewsContainer from "components/NewsContainer";
import { GraphQLClient } from "graphql-request";
export default function Home({ posts, events }) {
  return (
    <>
      <BlogPost posts={posts} />
      <EventsSection events={events} />
      <ComponentSection title="News">
        <NewsContainer posts={posts} />
      </ComponentSection>
    </>
  );
}
Home.getInitialProps = async () => {
  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckdorrw6h13ad01xnfrj38uu2/master"
  );
  const data = await graphcms.request(`{
    posts(orderBy: createdAt_ASC) {
      id
      title
      titleimage {
        url
        alt
      }
      content {
        html
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
  return { posts, events };
};
