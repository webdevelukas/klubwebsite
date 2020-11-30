import styled from "styled-components";
import { colors } from "styles/colors";
import renderTime from "services/renderTime";
import renderDayAndDate from "services/renderDayAndDate";
import type { Event } from "types";
import NextImage from "next/image";

type EventBoxProps = {
  event: Event;
};

function EventBox({ event }: EventBoxProps) {
  const { group } = event;

  return (
    <Article>
      <Date>{renderDayAndDate(event?.dateandtime)}</Date>
      <Time>{renderTime(event?.dateandtime)} Uhr</Time>
      <Wrapper>
        <SportsPictogram src="/pictogram.svg" />
        {group && <AgeGroup>{group.name}</AgeGroup>}
      </Wrapper>
      <OpponentsContainer>
        <NextImage
          src="/tsv-paunzhausen.png"
          width={1000}
          height={1000}
          objectFit="contain"
        />
        <NextImage
          src="/TSV-Au.png"
          width={1000}
          height={1000}
          objectFit="contain"
        />
      </OpponentsContainer>
    </Article>
  );
}

export default EventBox;

const Article = styled.article`
  position: relative;
  padding: 1rem;
  background: white;
  border-bottom: 0.25rem solid ${colors.main.default};
`;

const Date = styled.p`
  font-size: 1.75rem;
  line-height: 1.75rem;
  font-weight: bold;
  color: ${colors.main.default};
  text-transform: uppercase;
  margin-bottom: 0.5rem;
`;

const Time = styled.p`
  color: ${colors.main.default};
  text-transform: uppercase;
  line-height: 1rem;
`;

const Wrapper = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5rem;
  max-width: 50%;
`;

const SportsPictogram = styled.img`
  height: auto;
  width: 1.25rem;
  object-fit: contain;
  align-self: center;
`;

const AgeGroup = styled.p`
  align-self: center;
  line-height: 1rem;
`;

const OpponentsContainer = styled.div`
  position: absolute;
  width: 45%;
  right: 0.75rem;
  bottom: 0.75rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2.75rem;
  grid-column-gap: 0.25rem;
`;
