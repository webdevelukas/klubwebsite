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
  const { title, titleimage, event, department, groups, slug } = post;
  return (
    <NextLink href={`/news/${department.uid}/${slug}`} passHref>
      <a>
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
          <TextContainer>
            <Headline>{title}</Headline>
            <Details>
              {renderDate(event.dateandtime)} {department && "-"}{" "}
              {department?.name}{" "}
              {groups && `- ${renderGroupsWithSeperator(groups)}`}
            </Details>
          </TextContainer>
        </Article>
      </a>
    </NextLink>
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
  display: grid;
  grid-template-rows: 1fr 0.4fr;
`;

const Picture = styled.picture`
  position: relative;
  width: 100%;
  padding-bottom: 70%;
`;

const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  align-content: center;
  row-gap: var(--extra-small-spacing);
  background: var(--content-background);
  padding: var(--medium-spacing);
  color: var(--text-color);

  :hover {
    color: var(--highlight-color);
  }

  @media screen and (min-width: 1100px) {
    padding: var(--small-spacing) var(--large-spacing);
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
  font-size: 0.75rem;
  color: var(--text-color);
`;
