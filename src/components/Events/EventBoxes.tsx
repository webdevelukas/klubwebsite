import styled from "styled-components";
import EventBox from "../EventBox";
import ComponentSection from "elements/ComponentSection";
import { Events } from "types/events";

type EventBoxesProps = {
  events: Events;
};

function EventBoxes({ events }: EventBoxesProps) {
  return (
    <ComponentSection title="Kommende Events">
      <Container>
        {events.map((event, index) => (
          <EventBox key={index} event={event} />
        ))}
      </Container>
    </ComponentSection>
  );
}

export default EventBoxes;

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
`;
