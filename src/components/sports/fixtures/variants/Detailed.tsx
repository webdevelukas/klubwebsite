import styled from "styled-components";
import NextImage from "next/image";
import { checkGameState, renderDate } from "../../../../services";
import NextLink from "next/link";
import { Match } from "../../../../types";

type Props = {
  match: Match;
};

export function Detailed({ match }: Props) {
  const {
    homeTeam,
    awayTeam,
    result,
    date,
    time,
    competitionName,
    matchday,
    newsUrl,
  } = match;
  const gameState = checkGameState(date, time, result);
  const dateToRender = renderDate(date);

  return (
    <Article>
      <MetaWrapper>
        <Meta>
          {dateToRender} - {time} Uhr
        </Meta>
        <Meta>
          {competitionName}
          {matchday && `, ${matchday}. Spieltag`}
        </Meta>
      </MetaWrapper>
      <Scoring>
        <TeamName>{homeTeam.name}</TeamName>
        <TeamLogo>
          <NextImage
            src={homeTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={homeTeam.logo.alt || `${homeTeam.name} logo`}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
        <Result>{gameState}</Result>
        <TeamLogo>
          <NextImage
            src={awayTeam.logo.url || "/placeholders/team-logo.svg"}
            alt={awayTeam.logo.alt || `${awayTeam.name} logo`}
            layout="fill"
            objectFit="contain"
          />
        </TeamLogo>
        <TeamName>{awayTeam.name}</TeamName>
      </Scoring>
      {newsUrl && (
        <Wrapper>
          <NextLink href={`${newsUrl}`} passHref>
            <NewsLink>Spielbericht {">"}</NewsLink>
          </NextLink>
        </Wrapper>
      )}
    </Article>
  );
}

const Article = styled.article`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  background-color: var(--content-background);
`;

const variableLogoWidth =
  "minmax(1rem, calc(6rem - var(--medium-spacing) * 2))";

const Scoring = styled.div`
  display: grid;
  grid-template-columns: 1fr ${variableLogoWidth} auto ${variableLogoWidth} 1fr;
  column-gap: var(--medium-spacing);
  place-items: center center;
  min-height: 6rem;
  padding: var(--medium-spacing);
`;

const TeamLogo = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 90%;

  @media screen and (min-width: 576px) {
    padding-bottom: 80%;
  }
`;

const Result = styled.p`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Meta = styled.p`
  text-align: center;
  padding-bottom: var(--small-spacing);
`;

const MetaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--medium-spacing) var(--medium-spacing) 0;
`;

const TeamName = styled.p`
  font-weight: bold;
  font-size: 1.25rem;

  :first-of-type {
    justify-self: right;
  }
  :last-of-type {
    justify-self: left;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 var(--medium-spacing) var(--medium-spacing);
`;

const NewsLink = styled.a`
  font-size: 0.75rem;
`;
