import styled from "styled-components";
import { colors } from "styles/colors";
import { GetStaticPaths, GetStaticProps } from "next";

const job = {
  title: "Trainer*in für Basketball AGs an Schulen und Kindergärten",
  new: true,
  location: "Paunzhausen",
};
function JobPage() {
  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Headline>{job.title}</Headline>
        </TextContainer>
      </ContentContainer>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [{ params: { slug: "job" } }], fallback: false };
};

export default JobPage;

const Container = styled.div`
  background: white;
  padding-bottom: 4rem;
  border-bottom: 0.25rem solid ${colors.main.default};
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
  color: ${colors.main.default};
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
  border-bottom: 1px solid ${colors.main.default};
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
