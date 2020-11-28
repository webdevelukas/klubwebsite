import styled from "styled-components";
import Chips from "./Chips";
import NextLink from "next/link";
import renderDate from "services/renderDate";
import { Post } from "types/posts";
import NextImage from "next/image";

type SingleBlogPostProps = {
  index: number;
  post: Post;
};

function SingleBlogPost({ index, post }: SingleBlogPostProps) {
  const firstPost = index === 0;
  const { title, titleimage, event, id, groups } = post;

  return (
    <Article>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
          quality={20}
        />
      </Picture>
      <InfoContainer>
        <NextLink
          href="/news/[abteilung]/[title][id]"
          as={`/news/fussball/${id}`}
          passHref
        >
          <a>
            <Headline>{title}</Headline>
          </a>
        </NextLink>
        <Date>{renderDate(event.dateandtime)}</Date>
        {firstPost && groups && <Chips groups={groups} />}
      </InfoContainer>
    </Article>
  );
}

export default SingleBlogPost;

const Article = styled.article`
  position: relative;
  padding: 0.5rem;
  display: grid;
  grid-template-columns: minmax(6rem, 30%) auto;
  grid-template-rows: 6rem;
  grid-column-gap: 1rem;
  border-bottom: 1px solid lightgray;

  :first-of-type {
    grid-template-columns: minmax(8rem, 40%) auto;
    grid-template-rows: minmax(8rem, auto);

    h3 {
      font-size: 1.125rem;
      -webkit-line-clamp: 2;
    }
  }
`;

const Picture = styled.picture`
  position: relative;
`;

const InfoContainer = styled.div`
  padding: 1rem 0.25rem 1rem 0;
  > div {
    margin-top: 0.5rem;
  }
`;

const Headline = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Date = styled.p`
  font-size: 0.875rem;
  line-height: 0.875rem;
  font-weight: lighter;
`;
