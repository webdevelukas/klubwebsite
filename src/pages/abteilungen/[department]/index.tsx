import mainNavItems from "api/mainNavItems";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import NextImage from "next/image";
import NextLink from "next/link";
import Headline from "elements/Headline";
import AvatarList from "components/AvatarList";

type DepartmentPageProps = {
  department: string;
  groups: { name: string; slug: string; image: string }[];
  users: {
    image: {
      url: string;
      alt?: string;
    };
    name: string;
    role: string;
  }[];
};

function DepartmentPage({ department, groups, users }: DepartmentPageProps) {
  return (
    <Container>
      <Article>
        <Headline>Abteilung Fußball</Headline>
        <GridContainer>
          {groups.map(({ name, slug, image }, index) => (
            <NextLink key={index} href={slug}>
              <a>
                <DepartmentBox>
                  <ColorBox>
                    <DepartmentName>{name}</DepartmentName>
                  </ColorBox>
                  <NextImage src={image} layout="fill" objectFit="cover" />
                </DepartmentBox>
              </a>
            </NextLink>
          ))}
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
  const groups = [
    {
      name: "Herren 1",
      slug: "herren-1",
      image:
        "https://www.tsvpaunzhausen.de/files/cache/170b541ca591f6313f219f2bf6226a5f_f716.jpg",
    },
    {
      name: "Herren 2",
      slug: "herren-2",
      image:
        "https://www.tsvpaunzhausen.de/files/cache/170b541ca591f6313f219f2bf6226a5f_f716.jpg",
    },
    {
      name: "U15-Junioren",
      slug: "u15",
      image:
        "https://www.tsvpaunzhausen.de/files/8915/7134/8596/2019-10-14_TSV_C_Mannschaftsfoto.jpg",
    },
    {
      name: "U13-Junioren",
      slug: "u13",
      image:
        "https://www.tsvpaunzhausen.de/files/8915/7134/8596/2019-10-14_TSV_C_Mannschaftsfoto.jpg",
    },
    {
      name: "U9-Junioren",
      slug: "u9",
      image:
        "https://www.tsvpaunzhausen.de/files/1315/7441/7477/U7_U9_TSV-Paunzhausen_Mannschaftsbild.jpg",
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
  border-bottom: 0.25rem solid rgb(var(--main-color));
  row-gap: 2rem;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-template-areas:
    "titleimage"
    "article"
    "aside";
  grid-column-gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "titleimage titleimage titleimage"
      "article article aside";
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

const DepartmentBox = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 12rem;
  background-color: white;
`;

const DepartmentName = styled.h3`
  position: relative;
  color: rgb(var(--main-color));
`;

const ColorBox = styled.div`
  position: absolute;
  bottom: 1rem;
  padding: 0.25rem 1rem;
  background-color: white;
  z-index: 10;
  border-bottom: 0.25rem solid rgb(var(--main-color));
`;

const H2 = styled.h2`
  text-transform: uppercase;
  justify-self: center;
  color: rgb(var(--main-color));
  text-align: center;
  margin-bottom: 1rem;
`;
