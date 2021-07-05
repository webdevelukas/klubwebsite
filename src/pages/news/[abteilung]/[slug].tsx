import styled from "styled-components";
import Gallery from "components/images/Gallery";
import renderDate from "services/renderDate";
import { Post, Posts } from "types/posts";
import graphCMS from "services/graphCMS";
import NextImage from "next/image";
import AvatarList from "components/users/AvatarList";
import NewsListContainer from "components/news/NewsListContainer";
import Card from "components/departments/Card";
import NextLink from "next/link";

type NewsPageProps = {
  post: Post;
  posts: Posts;
};

function NewsPage({ post, posts }: NewsPageProps) {
  const { title, titleimage, content, event, author, images, department } =
    post;

  return (
    <PageWrapper>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
        />
      </Picture>
      <Container>
        <ContentContainer>
          <Date>{renderDate(event.dateandtime)}</Date>
          <TextContainer>
            <Headline>{title}</Headline>
            <Content
              dangerouslySetInnerHTML={{
                __html: content.html,
              }}
            />
          </TextContainer>
          {images.length > 0 && (
            <>
              <HorizontalLine />
              <Gallery images={images} />
            </>
          )}
        </ContentContainer>
        <Aside>
          {author && <AvatarList users={[author]} title="Autor" />}
          <NewsListContainer posts={posts} title="Weitere News" />
          {department && (
            <NextLink href={`/abteilungen/${department.uid}/`} passHref>
              <a>
                <Card
                  data={{
                    name: department.name,
                    image: { url: "", alt: "" },
                    slug: department.uid,
                  }}
                  small
                />
              </a>
            </NextLink>
          )}
        </Aside>
      </Container>
    </PageWrapper>
  );
}

type getStaticProps = {
  params: { slug: string };
};

export async function getStaticProps({ params }: getStaticProps) {
  const { slug } = params;

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

  const { post } = await graphCMS(
    `query postContent($slug: String){
    post(where: { slug: $slug }) {
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
      images {
        url
        alt
        width
        height
      }
      author {
        name
        position
        image {
          url 
          alt
        }
      }
      department {
        name
        uid
      }
    }
  }`,
    { slug: slug }
  );

  return { props: { post, posts } };
}

export async function getStaticPaths() {
  const { posts } = await graphCMS(`{
    posts {
      slug
      department {
        uid
      }
    }
  }
  `);

  const paths = posts.map((post: Post) => ({
    params: { abteilung: post.department.uid, slug: post.slug },
  }));

  return { paths, fallback: false };
}

export default NewsPage;

const PageWrapper = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;

  @media screen and (min-width: 768px) {
    row-gap: var(--large-spacing);
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
  align-items: start;
  row-gap: 2rem;
  max-width: var(--max-content-width);
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "content aside";
    column-gap: 2rem;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 2rem;
  padding: 1rem 1rem;
  background-color: var(--content-background);

  @media screen and (min-width: 1100px) {
    padding: 1rem 2rem;
  }
`;

const TextContainer = styled.div``;
const Date = styled.p`
  text-align: right;
  @media screen and (min-width: 1100px) {
    font-size: 1.25rem;
  }
`;
const Headline = styled.h1`
  color: var(--main-color);
  margin: 0 0 1rem;
  line-height: 2.25rem;

  @media screen and (min-width: 1100px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;
const Content = styled.div`
  p {
    margin-bottom: 1rem;

    :last-of-type {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    font-size: 1.25rem;
  }
`;
const Picture = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  height: 60vmin;
`;
const HorizontalLine = styled.div`
  margin: 2rem auto;
  border-bottom: 1px solid var(--main-color);
  width: 90%;
`;
