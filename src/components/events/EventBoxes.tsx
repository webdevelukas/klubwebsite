import styled from "styled-components";
import type { Events } from "types";
import { colors } from "styles/colors";
import EventBox from "./EventBox";

type EventBoxesProps = {
  events: Events;
};

function EventBoxes({ events }: EventBoxesProps) {
  return (
    <Wrapper>
      <Headline>Events</Headline>
      <Container>
        <GreyOverlay left />
        <GreyOverlay right />
        {events.map((event, index) => (
          <EventBox key={index} event={event} />
        ))}
        <ShowMoreEventsBox>
          <b>Mehr Events {`>`}</b>
        </ShowMoreEventsBox>
      </Container>
    </Wrapper>
  );
}

export default EventBoxes;

const Wrapper = styled.div`
  display: grid;
  grid-area: eventboxes;
  position: relative;
`;

const Container = styled.div`
  display: grid;
  padding: 0 2rem;
  grid-auto-columns: minmax(13.5rem, 70vw);
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  ::after {
    content: "";
    width: 1rem;
  }

  @media screen and (min-width: 1100px) {
    padding: 0 2rem 0 0;

    ::after {
      content: unset;
      width: unset;
    }
  }

  article:first-of-type {
    z-index: 2;
  }

  article:last-of-type {
    z-index: 2;
  }
`;

const GreyOverlay = styled.div<{ left?: boolean; right?: boolean }>`
  position: absolute;
  left: ${({ left }) => (left ? 0 : null)};
  right: ${({ right }) => (right ? 0 : null)};
  height: 100%;
  width: 2rem;
  background: linear-gradient(
    to ${({ left }) => (left ? "right" : "left")},
    ${colors.neutral},
    rgba(224, 224, 224, 0)
  );
  z-index: 1;
`;

const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
  text-align: center;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 1100px) {
    display: none;
  }
`;

const ShowMoreEventsBox = styled.article`
  background-color: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
`;
