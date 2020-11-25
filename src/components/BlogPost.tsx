import styled from "styled-components";
import { colors } from "../styles/colors";
import renderDate from "services/renderDate";
import FilestackImage from "elements/FilestackImage";
import NextLink from "next/link";
import { Posts } from "types/posts";
import { Groups } from "types/groups";

type BlogPostProps = {
  posts: Posts;
};

function BlogPost({ posts }: BlogPostProps) {
  const post = posts[0];
  const { title, titleimage, event, department, groups, id } = post;
  return (
    <Article>
      <Picture>
        <Image src={titleimage.url} alt={titleimage.alt} />
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
          {groups && "-"} {groups && renderGroupsWithSeperator(groups)}
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
const Article = styled.article``;
const Picture = styled.picture`
  display: flex;
`;
const Image = styled(FilestackImage)`
  height: 18rem;
  width: 100%;
  object-fit: cover;
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
