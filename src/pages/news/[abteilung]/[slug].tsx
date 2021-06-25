import styled from "styled-components";
import Gallery from "components/images/Gallery";
import renderDate from "services/renderDate";
import { Post } from "types/posts";
import graphCMS from "services/graphCMS";
import NextImage from "next/image";

type NewsPageProps = {
  post: Post;
};

function NewsPage({ post }: NewsPageProps) {
  const { title, titleimage, content, event, author, images } = post;

  return (
    <Container>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
        />
      </Picture>
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
        {author && (
          <>
            <HorizontalLine />
            <AuthorContainer>
              <AuthorImage>
                <NextImage
                  src={author.image.url}
                  layout="fill"
                  objectFit="cover"
                />
              </AuthorImage>
              <Author>{author.name}</Author>
              <AuthorRole>{author.position}</AuthorRole>
            </AuthorContainer>
          </>
        )}
      </ContentContainer>
    </Container>
  );
}

type getStaticProps = {
  params: { slug: string };
};

export async function getStaticProps({ params }: getStaticProps) {
  const { slug } = params;

  const post = await graphCMS(
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
        image {url}
      }
    }
  }`,
    { slug: slug }
  );
  return { props: post };
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
const Container = styled.div`
  background: white;
  padding-bottom: 4rem;
  border-bottom: 0.25rem solid var(--main-color);
  max-width: 900px;
  margin: 0 auto;
`;
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(auto-fill, auto);
  grid-gap: 2rem;
  padding: 1rem 1rem 0;

  @media screen and (min-width: 1100px) {
    padding: 1rem 2rem 0;
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

const Author = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;
const HorizontalLine = styled.div`
  margin: 2rem auto;
  border-bottom: 1px solid var(--main-color);
  width: 90%;
`;
const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1100px) {
    font-size: 1.25rem;
  }
`;
const AuthorImage = styled.picture`
  position: relative;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;

  > div:first-child {
    border-radius: 50%;
  }
`;
const AuthorRole = styled.p`
  line-height: 0.8rem;
`;
