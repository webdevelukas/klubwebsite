import styled from "styled-components";
import { colors } from "styles/colors";
import Gallery from "components/images/Gallery";
import FilestackImage from "elements/FilestackImage";
import renderDate from "services/renderDate";
import { Post } from "types/posts";
import graphCMS from "services/graphCMS";

type NewsPageProps = {
  post: Post;
};

function NewsPage({ post }: NewsPageProps) {
  const { title, titleimage, content, event, author, images } = post;

  return (
    <>
      <Container>
        <Picture>
          <Image src={titleimage.url} alt={titleimage.alt} />
        </Picture>
        <TextContainer>
          <Date>{renderDate(event.dateandtime)}</Date>
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
        <HorizontalLine />
        <AuthorContainer>
          <AuthorImage src={author.image.url} />
          <Author>{author.name}</Author>
          <AuthorRole>{author.position}</AuthorRole>
        </AuthorContainer>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  const { posts } = await graphCMS(`{
    posts {
      id
      department {
        uid
      }
    }
  }
  `);

  const paths = posts.map((post: Post) => ({
    params: { abteilung: post.department.uid, id: post.id },
  }));

  return { paths, fallback: false };
}

type getStaticProps = {
  params: { id: string };
};

export async function getStaticProps({ params }: getStaticProps) {
  const { id } = params;

  const post = await graphCMS(
    `query postContent($id: ID){
    post(where: { id: $id }) {
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
      }
      author {
        name
        position
        image {url}
      }
    }
  }`,
    { id: id }
  );
  return { props: post };
}

export default NewsPage;
const Container = styled.div`
  background: white;
  padding-bottom: 4rem;
  border-bottom: 0.25rem solid ${colors.main.default};
`;
const TextContainer = styled.div`
  padding: 1rem 2rem 0;
`;
const Date = styled.p`
  text-align: right;
`;
const Headline = styled.h1`
  color: ${colors.main.default};
  margin: 1.5rem 0 1rem;
  line-height: 2.25rem;
  text-transform: capitalize;
`;
const Content = styled.div`
  margin-bottom: 1rem;
  p {
    margin-bottom: 1rem;
  }
`;
const Picture = styled.picture`
  display: flex;
`;
const Image = styled(FilestackImage)`
  height: 18rem;
  width: 100%;
  object-fit: cover;
`;
const Author = styled.p`
  text-transform: uppercase;
  font-weight: bold;
`;
const HorizontalLine = styled.div`
  margin: 2rem auto;
  border-bottom: 1px solid ${colors.main.default};
  width: 70vw;
`;
const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AuthorImage = styled(FilestackImage)`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;
const AuthorRole = styled.p`
  line-height: 0.8rem;
`;
