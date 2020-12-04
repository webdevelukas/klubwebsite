import styled from "styled-components";
import renderDate from "services/renderDate";
import NextLink from "next/link";
import { Post } from "types/posts";
import { Groups } from "types/groups";
import NextImage from "next/image";

type BlogPostSmallProps = {
  post: Post;
};

function BlogPostSmall({ post }: BlogPostSmallProps) {
  const { title, titleimage, event, department, groups, id } = post;
  return (
    <Article>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
          quality={30}
          priority
        />
      </Picture>
      <NextLink
        href="/news/[abteilung]/[title][id]"
        as={`/news/fussball/${id}`}
        passHref
      >
        <a>
          <TextContainer>
            <Headline>{title}</Headline>

            <Details>
              {renderDate(event.dateandtime)} {department && "-"}{" "}
              {department?.name}{" "}
              {groups && `- ${renderGroupsWithSeperator(groups)}`}
            </Details>
          </TextContainer>
        </a>
      </NextLink>
    </Article>
  );
}
export default BlogPostSmall;

function renderGroupsWithSeperator(groups: Groups) {
  const groupsWithSeperator = groups
    .map((group) => group.name)
    .reduce((previous, current) => previous + ", " + current);
  return groupsWithSeperator;
}

const Article = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: minmax(16rem, 1fr) auto;
`;

const Picture = styled.picture`
  position: relative;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  padding: 0.75rem;

  @media screen and (min-width: 1100px) {
    padding: 1.5rem;
  }
`;

const Headline = styled.h1`
  font-size: 1.25rem;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Details = styled.p`
  margin: 0;
  font-size: 0.875rem;
  font-weight: lighter;
`;
