import graphCMS from "services/graphCMS";
import styled from "styled-components";
import { Groups, Posts } from "types";
import NextImage from "next/image";
import NextLink from "next/link";
import renderDate from "services/renderDate";
import { Select, Button } from "components/form";

type NewsPageProps = {
  posts: Posts;
};

function NewsPage({ posts }: NewsPageProps) {
  const handleFilterChange = () => {};
  return (
    <PageWrapper>
      <ContentContainer>
        <H1>Aktuelle News</H1>
        <FilterContainer>
          <Select
            id="deparments"
            name="deparments"
            placeholder="Alle Abteilungen"
            label="Abteilungen"
            onChange={handleFilterChange}
            value={""}
            error={""}
            options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
          />
          <Select
            id="topics"
            name="topics"
            placeholder="Alle Themen"
            label="Themen"
            onChange={handleFilterChange}
            value={""}
            error={""}
            options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
          />
          <Select
            id="period"
            name="period"
            placeholder="Zeitraum"
            label="Zeitraum"
            onChange={handleFilterChange}
            value={""}
            error={""}
            options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
          />
        </FilterContainer>
        <NewsGrid>
          {posts.map(
            (
              { titleimage, title, event, department, groups, content, slug },
              index
            ) => (
              <NextLink
                key={index}
                href={`/news/${department.uid}/${slug}`}
                passHref
              >
                <a>
                  <NewsItem>
                    <ImageWrapper>
                      <NextImage
                        src={titleimage.url}
                        alt={titleimage.alt}
                        layout="fill"
                        objectFit="cover"
                      />
                    </ImageWrapper>
                    <TextContent>
                      <Details>
                        <Categories>
                          {department?.name}{" "}
                          {groups && `- ${renderGroupsWithSeperator(groups)}`}
                        </Categories>
                        <p>{renderDate(event.dateandtime)}</p>
                      </Details>
                      <Title>{title}</Title>
                      <ContentTeaser
                        dangerouslySetInnerHTML={{
                          __html: content.html,
                        }}
                      />
                      <Link>Zum Artikel</Link>
                    </TextContent>
                  </NewsItem>
                </a>
              </NextLink>
            )
          )}
        </NewsGrid>
        <ButtonWrapper>
          <Button>Weitere Artikel laden</Button>
        </ButtonWrapper>
      </ContentContainer>
    </PageWrapper>
  );
}
export default NewsPage;

export async function getStaticProps() {
  const { posts } = await graphCMS(`{
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
        createdAt
        content {html}
      }
    }`);
  return { props: { posts } };
}

function renderGroupsWithSeperator(groups: Groups) {
  const groupsWithSeperator = groups
    .map((group) => group.name)
    .reduce((previous, current) => previous + ", " + current);
  return groupsWithSeperator;
}

const PageWrapper = styled.div`
  background-color: var(--content-background);
  padding: var(--large-spacing) 0;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--large-spacing);
  padding: var(--large-spacing) var(--medium-spacing);
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media screen and (min-width: 1100px) {
    padding: var(--large-spacing);
  }
`;

const H1 = styled.h1`
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const NewsGrid = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: var(--large-spacing);
  padding-bottom: var(--large-spacing);

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-auto-rows: unset;
    grid-auto-flow: unset;
  }
`;

const Title = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const NewsItem = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  row-gap: var(--small-spacing);
  color: var(--text-color);

  :hover {
    ${Title} {
      color: var(--highlight-color);
    }
  }
`;

const TextContent = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--small-spacing);
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 60%;
  width: 100%;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

const ContentTeaser = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: var(--text-color-lighter);
`;

const Categories = styled.p`
  color: var(--main-color);
`;

const Link = styled.span`
  font-weight: bold;
  font-size: 0.875rem;
  color: var(--highlight-color);
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  column-gap: var(--large-spacing);
  row-gap: var(--medium-spacing);
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
