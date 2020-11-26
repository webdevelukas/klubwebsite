import styled from "styled-components";
import EventBox from "../EventBox";
import ComponentSection from "elements/Section";
import { Events } from "types/events";

type EventsSectionProps = {
  events: Events;
};

function EventsSection({ events }: EventsSectionProps) {
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
export default EventsSection;
const Container = styled.div`
  display: grid;
  padding: 0 2rem;
  grid-auto-columns: minmax(13.5rem, 70vw);
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  overflow-x: auto;
  ::after {
    content: "";
    width: 1rem;
  }
`;