import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import graphCMS from "services/graphCMS";
import { Events, Image, Posts } from "types";
import AvatarList from "components/users/AvatarList";
import NewsListContainer from "components/news/NewsListContainer";
import Map from "components/maps/Map";
import HeroImage from "components/layout/HeroImage";
import TabContainer from "components/layout/TabContainer";
import { matches, standings, teamMembers } from "api";

type DepartmentPageProps = {
  department: string;
  group: string;
  posts: Posts;
  events: Events;
  users: {
    image: Image;
    name: string;
    role: string;
  }[];
};

function DepartmentPage({ users, posts }: DepartmentPageProps) {
  return (
    <PageWrapper>
      <HeroImage
        title={"1. Mannschaft"}
        subtitle={`Fußball - Herren`}
        image={{
          url: "https://scontent-muc2-1.xx.fbcdn.net/v/t1.6435-9/59841612_2213730432209555_2636491427273506816_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=YHlvfsp_CuUAX847ZTM&_nc_ht=scontent-muc2-1.xx&oh=4e35147c4fe521641fff0892b3dd4e5d&oe=60DF1D15",
          alt: "",
        }}
        centered
      />
      <Container>
        <Wrapper>
          <TabContainer
            matches={matches}
            standings={standings}
            teamMembers={teamMembers}
          />
        </Wrapper>
        <Aside>
          <AvatarList users={users} title="Ansprechpartner" />
          <NewsListContainer posts={posts} title="Aktuelles" />
          <Map title="Anfahrt" />
        </Aside>
      </Container>
    </PageWrapper>
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
      phone: "+49 1128 2121",
      email: "asda@asddas.de",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
      phone: "+49 1128 2121",
      email: "asda@asddas.de",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
      phone: "+49 1128 2121",
      email: "asda@asddas.de",
    },
    {
      image: {
        url: "/alexander-krivitskiy.jpg",
        alt: "Alexaner Krivitskiy",
      },
      name: "Alexaner Krivitskiy",
      role: "Abteilungsleiter",
      phone: "+49 1128 2121",
      email: "asda@asddas.de",
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
      createdAt
      content {
        html
      }
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

const Wrapper = styled.div`
  grid-area: content;
  padding: 0 var(--small-spacing);

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;
const Aside = styled.aside`
  display: grid;
  grid-area: aside;
  align-self: start;
  row-gap: 2rem;
  padding: 0 var(--small-spacing);

  @media screen and (min-width: 576px) {
    padding: 0;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    "content"
    "aside";
  row-gap: 2rem;
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "content aside";
    column-gap: 2rem;
  }
`;

const PageWrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--large-spacing);
`;
