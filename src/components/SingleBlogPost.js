import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ResponsiveImage from "elements/ResponsiveImage";
import Chips from "./Chips";
import NextLink from "next/link";
import renderDate from "services/renderDate";
import FilestackImage from "../elements/FilestackImage";
SingleBlogPost.propTypes = {};
function SingleBlogPost({ index, post }) {
  const firstPost = index === 0;
  const { title, titleimage, event, id, groups } = post;
  return (
    <Article>
      <Picture>
        <Image src={titleimage.url} alt={titleimage.alt} />
      </Picture>
      <InfoContainer>
        <NextLink
          href="/news/[abteilung]/[title][id]"
          as={`/news/fussball/${id}`}
        >
          <Headline>{title}</Headline>
        </NextLink>
        <Date>{renderDate(event.dateandtime)}</Date>
        {/* {firstPost && <Chips groups={groups} />} */}
      </InfoContainer>
    </Article>
  );
}
export default SingleBlogPost;
const Article = styled.article`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 0.75fr 2fr;
  border-bottom: 1px solid lightgray;
  :first-of-type {
    grid-template-columns: 1.25fr 2fr;
    h3 {
      font-size: 1.125rem;
      -webkit-line-clamp: 4;
    }
  }
`;
const Picture = styled.picture`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  padding-bottom: 100%;
`;
const Image = styled(FilestackImage)`
  position: absolute;
`;
const InfoContainer = styled.div`
  padding: 1rem 0.25rem 1rem 0.5rem;
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
  font-size: 0.75rem;
`;
