import PageSection from "elements/PageSection";
import styled from "styled-components";

type MapProps = { title: string };

function Map({ title }: MapProps) {
  return (
    <PageSection title={title}>
      <Container>
        <iframe
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=11.561028957366945%2C48.46811269807975%2C11.570041179656984%2C48.473333821256304&amp;layer=mapnik&amp;marker=48.470723326820135%2C11.565535068511963"
        />
        <small>
          <a
            href="https://www.openstreetmap.org/?mlat=48.47072&amp;mlon=11.56554#map=17/48.47072/11.56554"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Larger Map
          </a>
        </small>
      </Container>
    </PageSection>
  );
}

export default Map;

const Container = styled.div`
  padding: var(--medium-spacing);
  background-color: var(--content-background);
`;
