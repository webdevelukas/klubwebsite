import type { Events } from "types";
import graphCMS from "services/graphCMS";
import styled from "styled-components";
import { Select } from "components/form";
import renderTime from "services/renderTime";
import NextImage from "next/image";

type EventsPageProps = {
  events: Events;
};

function EventsPage({ events }: EventsPageProps) {
  const handleFilterChange = () => {};
  const eventdates = events.map(({ dateandtime }) => {
    const date = new Date(dateandtime);
    const weekday = new Intl.DateTimeFormat("de-DE", {
      weekday: "long",
    }).format(date);
    const monthAndDay = date.toLocaleDateString("de-DE", {
      month: "2-digit",
      day: "2-digit",
    });

    return { weekday: weekday, monthAndDay: monthAndDay };
  });

  const uniqueEventdates = [
    ...new Map(
      eventdates.map((eventdate) => [eventdate["monthAndDay"], eventdate])
    ).values(),
  ];

  return (
    <PageWrapper>
      <ContentContainer>
        <ContentHeader>
          <H1>Aktuelle Termine</H1>
          <FilterContainer>
            <Select
              id="deparments"
              name="deparments"
              placeholder="Alle Abteilungen"
              label="Abteilungen"
              onChange={handleFilterChange}
              value={""}
              error={""}
              options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
            />
            <Select
              id="period"
              name="period"
              placeholder="Zeitraum"
              label="Zeitraum"
              onChange={handleFilterChange}
              value={""}
              error={""}
              options={["Mitgliedschaft", "Freundschaftsspiel", "Kooperation"]}
            />
          </FilterContainer>
        </ContentHeader>
        {uniqueEventdates.map(({ weekday, monthAndDay }, index) => {
          const filteredEvents = events.filter(({ dateandtime }) => {
            const actualDate = new Date(dateandtime);
            const dayAndMonth = actualDate.toLocaleDateString("de-DE", {
              month: "2-digit",
              day: "2-digit",
            });

            return dayAndMonth === monthAndDay;
          });
          return (
            <div key={index}>
              <DayAndDateContainer>
                <Day>{weekday}</Day>
                <DateString>{monthAndDay}</DateString>
              </DayAndDateContainer>
              <EventList>
                {filteredEvents.map((event, index) => (
                  <EventListItem key={index}>
                    <EventContext>
                      <p>{renderTime(event?.dateandtime)} Uhr</p>
                      <TitleWrapper>
                        <p>{event?.title}</p> <Link>Mehr Details</Link>
                      </TitleWrapper>
                    </EventContext>
                    <ImageContainer>
                      <ImageWrapper>
                        <NextImage
                          src="/tsv-paunzhausen.png"
                          layout="fill"
                          objectFit="contain"
                        />
                      </ImageWrapper>
                    </ImageContainer>
                  </EventListItem>
                ))}
              </EventList>
            </div>
          );
        })}
      </ContentContainer>
    </PageWrapper>
  );
}

export async function getStaticProps() {
  const { events } = await graphCMS(`{
    events(orderBy: dateandtime_ASC) {
      title
      dateandtime
      department {name}
      group {
        name
      }
    }
  }`);
  return { props: { events } };
}

export default EventsPage;

const PageWrapper = styled.div`
  padding-top: var(--large-spacing);
  max-width: var(--max-content-width);
  margin: 0 auto;
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  gap: var(--large-spacing);

  @media screen and (min-width: 576px) {
    grid-template-columns: 2fr 1fr;
    grid-auto-rows: unset;
    grid-auto-flow: unset;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--medium-spacing);
`;

const H1 = styled.h1`
  color: var(--main-color);
  font-size: 2rem;
  margin-bottom: 0.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media screen and (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const ContentHeader = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-auto-flow: row;
  row-gap: var(--large-spacing);
  background-color: var(--content-background);
  padding: var(--large-spacing) var(--medium-spacing);
  border-radius: 0 0 var(--border-radius) var(--border-radius);

  @media screen and (min-width: 576px) {
    padding: var(--large-spacing);
  }
`;

const FilterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  column-gap: var(--large-spacing);
  row-gap: var(--medium-spacing);
`;

const DayAndDateContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(8rem, auto) 1fr;
  font-weight: bold;
  min-height: 2.5rem;
`;

const Day = styled.div`
  display: flex;
  background-color: var(--main-color);
  padding: var(--small-spacing);
  color: var(--content-background);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius) 0 0 0;
`;
const DateString = styled.div`
  display: flex;
  background-color: var(--content-background-alternative);
  padding: var(--small-spacing);
  padding-left: var(--medium-spacing);
  color: var(--main-color);
  align-items: center;
  border-radius: 0 var(--border-radius) 0 0;
`;

const ImageContainer = styled.div`
  padding: var(--medium-spacing);
  background-color: var(--content-background);
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 100%;
`;

const EventContext = styled.div`
  display: flex;
  background-color: var(--content-background);
  height: 100%;
  align-items: center;
  font-weight: bold;
  padding: var(--medium-spacing);
  justify-content: space-between;
`;

const EventListItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 5rem;
  column-gap: 1px;
  align-items: center;

  :last-of-type {
    ${EventContext} {
      border-radius: 0 0 0 var(--border-radius);
    }
    ${ImageContainer} {
      border-radius: 0 0 var(--border-radius) 0;
    }
  }
`;

const EventList = styled.div`
  display: grid;
  row-gap: 1px;
`;

const TitleWrapper = styled.div`
  text-align: right;
`;

const Link = styled.a`
  font-size: 0.75rem;
`;
