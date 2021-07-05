import NextImage from "next/image";
import NextLink from "next/link";
import renderDate from "services/renderDate";
import styled from "styled-components";
import { Post } from "../../types";

export type NewsListItemProps = {
  post: Post;
};

function NewsListItem({ post }: NewsListItemProps) {
  const { titleimage, title, createdAt, department, slug } = post;
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
            <CallToAction>Jetzt lesen {">"}</CallToAction>
          </Content>
        </Article>
      </a>
    </NextLink>
  );
}

export default NewsListItem;

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: var(--medium-spacing);
  background-color: var(--content-background);
  padding: var(--small-spacing) var(--medium-spacing);
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
`;
const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: var(--small-spacing);
  padding: var(--small-spacing) 0;
  color: var(--text-color);
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--small-spacing);
`;

const CallToAction = styled.p`
  font-weight: bold;
  color: var(--highlight-color);
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
