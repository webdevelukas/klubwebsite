import styled from "styled-components";
import NextImage from "next/image";
import NextLink from "next/link";
import { Groups, Posts } from "types";
import renderDate from "services/renderDate";
import useMediaQuery from "hooks/useMediaQuery";

type HeroNewsGridProps = {
  posts: Posts;
};

function HeroNewsGrid({ posts }: HeroNewsGridProps) {
  const [isTablet] = useMediaQuery("(min-width: 768px)");
  const latestPost = posts[0];

  return (
    <GridContainer>
      <NextLink
        href={`/news/${latestPost.department.uid}/${latestPost.slug}`}
        passHref
      >
        <a>
          <BigNewsContainer>
            <GradientOverlay>
              <Details>
                {renderDate(latestPost.event.dateandtime)}{" "}
                {latestPost.department && "-"} {latestPost.department?.name}{" "}
                {latestPost.groups &&
                  `- ${renderGroupsWithSeperator(latestPost.groups)}`}
              </Details>
              <Title>{latestPost.title}</Title>
            </GradientOverlay>
            <NextImage
              src={latestPost.titleimage.url}
              alt={latestPost.titleimage.alt}
              layout="fill"
              objectFit="cover"
            />
          </BigNewsContainer>
        </a>
      </NextLink>
      <Wrapper>
        {" "}
        <NextLink
          href={`/news/${posts[1].department.uid}/${posts[1].slug}`}
          passHref
        >
          <a>
            <SmallNewsContainer>
              <GradientOverlay>
                <Details>
                  {renderDate(posts[1].event.dateandtime)}{" "}
                  {posts[1].department && "-"} {posts[1].department?.name}{" "}
                  {posts[1].groups &&
                    `- ${renderGroupsWithSeperator(posts[1].groups)}`}
                </Details>
                <SmallTitle>{posts[1].title}</SmallTitle>
              </GradientOverlay>
              <NextImage
                src={posts[1].titleimage.url}
                alt={posts[1].titleimage.alt}
                layout="fill"
                objectFit="cover"
              />
            </SmallNewsContainer>{" "}
          </a>
        </NextLink>
        {isTablet && (
          <NextLink
            href={`/news/${posts[2].department.uid}/${posts[2].slug}`}
            passHref
          >
            <a>
              <SmallNewsContainer>
                <GradientOverlay>
                  <Details>
                    {renderDate(posts[2].event.dateandtime)}{" "}
                    {posts[2].department && "-"} {posts[2].department?.name}{" "}
                    {posts[2].groups &&
                      `- ${renderGroupsWithSeperator(posts[2].groups)}`}
                  </Details>
                  <SmallTitle>{posts[2].title}</SmallTitle>
                </GradientOverlay>
                <NextImage
                  src={posts[2].titleimage.url}
                  alt={posts[2].titleimage.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </SmallNewsContainer>{" "}
            </a>
          </NextLink>
        )}
      </Wrapper>
    </GridContainer>
  );
}

export default HeroNewsGrid;

function renderGroupsWithSeperator(groups: Groups) {
  const groupsWithSeperator = groups
    .map((group) => group.name)
    .reduce((previous, current) => previous + ", " + current);
  return groupsWithSeperator;
}

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 1px;

  @media screen and (min-width: 992px) {
    grid-template-rows: unset;
    grid-template-columns: 2fr 1.5fr;
    column-gap: 1px;
  }
`;
const BigNewsContainer = styled.div`
  position: relative;
  max-width: 100%;
  padding-bottom: 100%;

  @media screen and (min-width: 576px) {
    padding-bottom: 80%;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 60%;
  }

  @media screen and (min-width: 992px) {
    padding-bottom: 75%;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 1px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
    row-gap: 1px;
  }
`;

const GradientOverlay = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  width: 100%;
  background: linear-gradient(to top, var(--text-color), hsla(0, 100%, 5%, 0%));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--extra-large-spacing) var(--large-spacing) 5%;
`;

const SmallNewsContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 70%;

  @media screen and (min-width: 992px) {
    height: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const SmallTitle = styled.h2`
  color: white;
`;

const Details = styled.p`
  font-size: 0.875rem;
  color: white;
  margin-bottom: 0.5rem;
`;
