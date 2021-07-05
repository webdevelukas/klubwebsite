import mainNavItems from "api/mainNavItems";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import Card from "components/departments/Card";
import NextLink from "next/link";
import HeroImage from "components/layout/HeroImage";
import AvatarList from "components/users/AvatarList";
import { Groups, Image } from "types";
import Map from "components/maps/Map";

type DepartmentPageProps = {
  department: string;
  groups: Groups;
  users: {
    image: Image;
    name: string;
    role: string;
  }[];
};

function DepartmentPage({ department, groups, users }: DepartmentPageProps) {
  return (
    <PageGrid>
      <HeroImage
        title={"Abteilung Fußball"}
        subtitle={`400 Mitglieder`}
        image={{
          url: "https://www.tsvpaunzhausen.de/files/cache/170b541ca591f6313f219f2bf6226a5f_f716.jpg",
          alt: "",
        }}
      />
      <Container>
        <Article>
          <GridContainer>
            {groups.map((group, index) => (
              <NextLink
                key={index}
                href={`${department}/${group.slug}`}
                passHref
              >
                <a>
                  <Card data={group} />
                </a>
              </NextLink>
            ))}
          </GridContainer>
        </Article>
        <Aside>
          <AvatarList users={users} title="Ansprechpartner" />
          <Map title="Anfahrt" />
        </Aside>
      </Container>
    </PageGrid>
  );
}

export default DepartmentPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const department = params?.department;
  const groups = [
    {
      name: "Herren 1",
      slug: "herren-1",
      image: {
        url: "https://www.tsvpaunzhausen.de/files/cache/170b541ca591f6313f219f2bf6226a5f_f716.jpg",
        alt: "",
      },
    },
    {
      name: "Herren 2",
      slug: "herren-2",
      image: {
        url: "https://www.tsvpaunzhausen.de/files/cache/170b541ca591f6313f219f2bf6226a5f_f716.jpg",
        alt: "",
      },
    },
    {
      name: "U15-Junioren",
      slug: "u15-junioren",
      image: {
        url: "https://www.tsvpaunzhausen.de/files/8915/7134/8596/2019-10-14_TSV_C_Mannschaftsfoto.jpg",
        alt: "",
      },
    },
    {
      name: "U13-Junioren",
      slug: "u13-junioren",
      image: {
        url: "https://www.tsvpaunzhausen.de/files/8915/7134/8596/2019-10-14_TSV_C_Mannschaftsfoto.jpg",
        alt: "",
      },
    },
    {
      name: "U9-Junioren",
      slug: "u9-junioren",
      image: {
        url: "https://www.tsvpaunzhausen.de/files/1315/7441/7477/U7_U9_TSV-Paunzhausen_Mannschaftsbild.jpg",
        alt: "",
      },
    },
  ];
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

  return { props: { department, groups, users } };
};

type DepartmentProps = {
  url: string;
  title: string;
  slug?: string;
  links?: { url: string; title: string }[] | undefined;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const departments = mainNavItems[1].submenuItems;

  const paths = departments.map((department: DepartmentProps) => ({
    params: { department: department.slug },
  }));

  return { paths, fallback: false };
};

const Article = styled.article`
  grid-area: article;
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
    "article"
    "aside";
  row-gap: 2rem;
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "article article aside";
    column-gap: 2rem;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  grid-gap: 1rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
`;

const PageGrid = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--large-spacing);
  max-width: var(--max-content-width);
  margin: 0 auto;
`;
