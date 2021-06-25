import styled from "styled-components";
import NextImage from "next/image";
import { checkGameState, renderDate } from "../../../../services";
import { Match } from "../../../../types";

type Props = {
  match: Match;
};

export function Normal({ match }: Props) {
  const { homeTeam, awayTeam, result, date, time } = match;
  const gameState = checkGameState(date, time, result);
  const dateToRender = renderDate(date);

  return (
    <Article>
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
      <Meta>
        {dateToRender} - {time} Uhr
      </Meta>
    </Article>
  );
}

const Article = styled.article`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  background-color: var(--content-background);
  justify-items: center;
`;

const variableLogoWidth =
  "minmax(1rem, calc(6rem - var(--medium-spacing) * 2))";

const Scoring = styled.div`
  display: grid;
  grid-template-columns: ${variableLogoWidth} auto ${variableLogoWidth};
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
