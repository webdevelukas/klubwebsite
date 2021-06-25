import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import Headline from "elements/Headline";
import AvatarList from "components/AvatarList";
import graphCMS from "services/graphCMS";
import BlogPost from "components/news/BlogPost";
import { Events, Posts } from "types";
import BlogPosts from "components/news/BlogPosts";
import EventBoxes from "components/events/EventBoxes";

type DepartmentPageProps = {
  department: string;
  group: string;
  posts: Posts;
  events: Events;
  users: {
    image: {
      url: string;
      alt?: string;
    };
    name: string;
    role: string;
  }[];
};

function DepartmentPage({
  department,
  group,
  users,
  posts,
  events,
}: DepartmentPageProps) {
  return (
    <Container>
      <Article>
        <Headline>
          {group} - {department}
        </Headline>
        <GridContainer>
          <BlogPost posts={posts} />
          <EventBoxes events={events} />
          <BlogPosts posts={posts} />
        </GridContainer>
      </Article>
      <Aside>
        <div>
          <H2>Ansprechpartner</H2>
          <AvatarList users={users} />
        </div>
        <div>
          <H2>Anfahrt</H2>
          <iframe
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=11.561028957366945%2C48.46811269807975%2C11.570041179656984%2C48.473333821256304&amp;layer=mapnik&amp;marker=48.470723326820135%2C11.565535068511963"
          />
          <small>
            <a
              href="https://www.openstreetmap.org/?mlat=48.47072&amp;mlon=11.56554#map=17/48.47072/11.56554"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Larger Map
            </a>
          </small>
        </div>
      </Aside>
    </Container>
  );
}

export default DepartmentPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const department = params?.department;
  const group = params?.group;

  const users = [
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
    },
  ];

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

  return { props: { department, group, users, posts, events } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { department: "fussball", group: "herren-1" } },
    { params: { department: "fussball", group: "herren-2" } },
    { params: { department: "fussball", group: "u15-junioren" } },
    { params: { department: "fussball", group: "u13-junioren" } },
    { params: { department: "fussball", group: "u11-junioren" } },
    { params: { department: "fussball", group: "u9-junioren" } },
    { params: { department: "fussball", group: "u9-junioren-2" } },
    { params: { department: "tennis", group: "herren-1" } },
    { params: { department: "tennis", group: "herren-2" } },
    { params: { department: "tennis", group: "u15-junioren" } },
    { params: { department: "tennis", group: "u13-junioren" } },
  ];

  return {
    paths,
    fallback: false,
  };
};

const Article = styled.article`
  grid-area: article;
  padding: 0 1rem;

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;
const Aside = styled.aside`
  display: grid;
  grid-area: aside;
  padding: 1rem 1rem 2rem;
  background: white;
  align-self: start;
  border-bottom: 0.25rem solid var(--main-color);
  row-gap: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    "article"
    "aside";
  grid-column-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "article article aside";
  }
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  justify-self: center;
  color: var(--main-color);
  text-align: center;
  margin-bottom: 1rem;
`;
