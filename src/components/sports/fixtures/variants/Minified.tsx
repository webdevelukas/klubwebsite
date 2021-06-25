import styled from "styled-components";
import NextImage from "next/image";
import { checkGameState, renderDate } from "../../../../services";
import { Match } from "../../../../types";

type Props = {
  match: Match;
};

export function Minified({ match }: Props) {
  const { homeTeam, awayTeam, result, date, time } = match;
  const gameState = checkGameState(date, time, result);
  const dateToRender = renderDate(date);

  return (
    <Article>
      <Meta>
        <Date>{dateToRender}</Date>
        <p>{time} Uhr</p>
      </Meta>
      <Scoring>
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
      </Scoring>
    </Article>
  );
}

const Article = styled.article`
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  grid-gap: var(--small-spacing);
  background-color: var(--content-background);
  align-items: center;
  padding: var(--small-spacing) var(--medium-spacing);
`;

const variableLogoWidth =
  "minmax(1rem, calc(6rem - var(--medium-spacing) * 2))";

const Scoring = styled.div`
  display: grid;
  grid-template-columns: ${variableLogoWidth} auto ${variableLogoWidth};
  column-gap: var(--medium-spacing);
  place-items: center center;
  min-height: 4rem;
  justify-self: right;
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

const Meta = styled.div`
  text-align: left;
`;

const Date = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: var(--small-spacing);
`;
