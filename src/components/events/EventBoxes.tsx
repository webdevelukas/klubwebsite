import styled from "styled-components";
import type { Events } from "types";
import EventBox from "./EventBox";

type EventBoxesProps = {
  events: Events;
};

function EventBoxes({ events }: EventBoxesProps) {
  return (
    <Wrapper>
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
  grid-auto-columns: 15rem;
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
    "var(--content-background-alternative)",
    rgba(224, 224, 224, 0)
  );
  z-index: 1;
`;

const ShowMoreEventsBox = styled.article`
  background-color: var(--highlight-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  border-radius: var(--border-radius);
`;
