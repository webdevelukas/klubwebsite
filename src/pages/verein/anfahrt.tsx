import Headline from "elements/Headline";
import styled from "styled-components";

function AnfahrtsPage() {
  return (
    <PageWrapper>
      <Container>
        <Headline>Anfahrt</Headline>
        <iframe
          width="100%"
          height="600"
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
    </PageWrapper>
  );
}

export default AnfahrtsPage;

export async function getStaticProps() {
  return { props: {} };
}

const PageWrapper = styled.div`
  background-color: var(--content-background);
`;

const Container = styled.div`
  padding: var(--large-spacing) var(--medium-spacing) var(--extra-large-spacing);
  margin: 0 auto;
  max-width: var(--max-content-width);
`;
