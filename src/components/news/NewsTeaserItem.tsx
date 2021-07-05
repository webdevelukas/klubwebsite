import NextImage from "next/image";
import NextLink from "next/link";
import renderDate from "services/renderDate";
import styled from "styled-components";
import { Post } from "../../types";

export type NewsTeaserItemProps = {
  post: Post;
};

function NewsTeaserItem({ post }: NewsTeaserItemProps) {
  const { titleimage, title, createdAt, department, slug, content } = post;
  return (
    <NextLink href={`/news/${department.uid}/${slug}`} passHref>
      <a>
        <Article>
          <ImageWrapper>
            <NextImage
              src={titleimage.url}
              alt={titleimage.alt}
              layout="fill"
              objectFit="cover"
            />
          </ImageWrapper>
          <Content>
            <Wrapper>
              <H4>{title}</H4>
              <small>{renderDate(createdAt)}</small>
            </Wrapper>
            <Text>{content.html}</Text>{" "}
            <CallToAction>Jetzt lesen {">"}</CallToAction>
          </Content>
        </Article>
      </a>
    </NextLink>
  );
}

export default NewsTeaserItem;

const Article = styled.article`
  display: grid;
  grid-template-rows: auto auto;
  column-gap: var(--medium-spacing);
  background-color: var(--content-background);
  padding: var(--medium-spacing);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 60%;
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: var(--small-spacing);
  padding: var(--medium-spacing) 0;
  color: var(--text-color);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--small-spacing);
`;

const H4 = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  :hover {
    color: var(--highlight-color);
  }
`;

const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CallToAction = styled.p`
  font-weight: bold;
  color: var(--highlight-color);
`;
