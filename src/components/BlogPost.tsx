import styled from "styled-components";
import { colors } from "../styles/colors";
import renderDate from "services/renderDate";
import NextLink from "next/link";
import { Posts } from "types/posts";
import { Groups } from "types/groups";
import NextImage from "next/image";

type BlogPostProps = {
  posts: Posts;
};

function BlogPost({ posts }: BlogPostProps) {
  const newestPost = posts[0];
  const { title, titleimage, event, department, groups, id } = newestPost;
  return (
    <Article>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
          priority
        />
      </Picture>
      <TextContainer>
        <CategoryText>Top story</CategoryText>
        <NextLink
          href="/news/[abteilung]/[title][id]"
          as={`/news/fussball/${id}`}
        >
          <Headline>{title}</Headline>
        </NextLink>
        <Details>
          {renderDate(event.dateandtime)} {department && "-"} {department?.name}{" "}
          {groups && `- ${renderGroupsWithSeperator(groups)}`}
        </Details>
      </TextContainer>
    </Article>
  );
}
export default BlogPost;

function renderGroupsWithSeperator(groups: Groups) {
  const groupsWithSeperator = groups
    .map((group) => group.name)
    .reduce((previous, current) => previous + ", " + current);
  return groupsWithSeperator;
}

const Article = styled.article`
  display: grid;
  grid-template-rows: 18rem auto;
`;

const Picture = styled.picture`
  position: relative;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.main.default};
  color: white;
  padding: 0.75rem;
`;

const CategoryText = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const Headline = styled.h1`
  font-size: 1.25rem;
  text-transform: uppercase;
  line-height: 1.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Details = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;
