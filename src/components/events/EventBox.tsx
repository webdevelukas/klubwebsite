import styled from "styled-components";
import renderTime from "services/renderTime";
import type { Event } from "types";
import NextImage from "next/image";

type EventBoxProps = {
  event: Event;
};

function EventBox({ event }: EventBoxProps) {
  const { group, dateandtime, title } = event;
  const eventDate = new Date(dateandtime);

  const weekday = new Intl.DateTimeFormat("de-DE", {
    weekday: "long",
  }).format(eventDate);
  const monthAndDay = new Intl.DateTimeFormat("de-DE", {
    month: "2-digit",
    day: "2-digit",
  }).format(eventDate);

  return (
    <Article>
      <MainContentWrapper>
        <DayAndDateContainer>
          <Day>{weekday}</Day>
          <DateString>{monthAndDay}</DateString>
          <ImageContainer>
            <ImageWrapper>
              <NextImage
                src="/pictogram.svg"
                layout="fill"
                objectFit="contain"
              />
            </ImageWrapper>
          </ImageContainer>
        </DayAndDateContainer>
        <Wrapper>
          <DescriptionContainer>
            <Title>{title}</Title>
            <GroupAndTime>
              {group && `${group.name} - `}
              {renderTime(dateandtime)} Uhr
            </GroupAndTime>
          </DescriptionContainer>
        </Wrapper>
      </MainContentWrapper>
      <OpponentsContainer>
        <LogoContainer>
          <LogoWrapper>
            <NextImage
              src="/tsv-paunzhausen.png"
              layout="fill"
              objectFit="contain"
            />
          </LogoWrapper>
        </LogoContainer>
        <LogoContainer>
          <LogoWrapper>
            <NextImage src="/TSV-Au.png" layout="fill" objectFit="contain" />
          </LogoWrapper>
        </LogoContainer>
      </OpponentsContainer>
    </Article>
  );
}

export default EventBox;

const Article = styled.article`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  column-gap: 1px;
`;

const MainContentWrapper = styled.div`
  display: grid;
  grid-template-rows: 2.5rem auto;
  gap: 1px;
`;

const DayAndDateContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto 2.5rem;
  font-weight: bold;
  column-gap: 1px;
  font-size: 0.875rem;
`;

const Day = styled.p`
  display: flex;
  background-color: var(--main-color);
  padding: var(--extra-small-spacing) var(--small-spacing);
  color: var(--content-background);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius) 0 0 0;
`;

const DateString = styled.div`
  display: flex;
  background-color: var(--content-background);
  padding: var(--small-spacing);
  color: var(--main-color);
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  column-gap: 1px;
`;

const ImageContainer = styled.div`
  padding: var(--small-spacing);
  background-color: var(--content-background);
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const Title = styled.h3`
  font-size: 0.875rem;
`;

const GroupAndTime = styled.p`
  font-size: 0.875rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--medium-spacing);
  background-color: var(--content-background);
  justify-content: center;
  border-radius: 0 0 0 var(--border-radius);
`;

const OpponentsContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  row-gap: 1px;
  width: 3rem;
`;

const LogoContainer = styled.div`
  padding: var(--small-spacing);
  background-color: var(--content-background-alternative);

  :first-of-type {
    border-radius: 0 var(--border-radius) 0 0;
  }

  :last-of-type {
    border-radius: 0 0 var(--border-radius) 0;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
