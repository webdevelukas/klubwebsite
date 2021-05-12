import styled from "styled-components";
import { colors } from "styles/colors";
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
  const { title, titleimage, event, department, groups, slug } = newestPost;
  return (
    <Article>
      <Picture>
        <NextImage
          src={titleimage.url}
          alt={titleimage.alt}
          layout="fill"
          objectFit="cover"
          quality={40}
          priority
        />
      </Picture>
      <NextLink href={`/news/${department.uid}/${slug}`} passHref>
        <a>
          <TextContainer>
            <CategoryText>Top story</CategoryText>

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
export default BlogPost;

function renderGroupsWithSeperator(groups: Groups) {
  const groupsWithSeperator = groups
    .map((group) => group.name)
    .reduce((previous, current) => previous + ", " + current);
  return groupsWithSeperator;
}

const Article = styled.article`
  display: grid;
  grid-template-rows: minmax(18rem, 1fr) auto;
  grid-area: blogpost;
  box-shadow: 0 0.25rem 0 ${colors.main.shadow};
`;

const Picture = styled.picture`
  position: relative;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.main.default};
  color: white;
  padding: 0.75rem;

  @media screen and (min-width: 1100px) {
    padding: 1.5rem;
  }
`;

const CategoryText = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-size: 0.875rem;
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
