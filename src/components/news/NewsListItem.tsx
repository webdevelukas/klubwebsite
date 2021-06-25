import NextImage from "next/image";
import NextLink from "next/link";
import styled from "styled-components";
import { NewsArticle } from "../../types";

export type NewsListItemProps = {
  article: NewsArticle;
};

function NewsListItem({ article }: NewsListItemProps) {
  const { image, title, createdAt, slug } = article;
  return (
    <Article>
      <ImageWrapper>
        <NextImage
          src={image.url}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageWrapper>
      <Content>
        <Wrapper>
          <H4>{title}</H4>
          <small>{createdAt}</small>
        </Wrapper>
        <NextLink href={slug} passHref>
          <Link>Jetzt lesen {">"}</Link>
        </NextLink>
      </Content>
    </Article>
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
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--small-spacing);
`;

const Link = styled.a`
  font-weight: bold;
`;

const H4 = styled.h4`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
