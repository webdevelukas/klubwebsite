import React from "react";
import PropTypes from "prop-types";
import Headline from "elements/Headline";
import styled from "styled-components";
import { colors } from "styles/colors";
Anfahrt.propTypes = {};
function Anfahrt(props) {
  return (
    <Container>
      <Headline>Anfahrt</Headline>
      <iframe
        width="100%"
        height="350"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=11.561028957366945%2C48.46811269807975%2C11.570041179656984%2C48.473333821256304&amp;layer=mapnik&amp;marker=48.470723326820135%2C11.565535068511963"
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/?mlat=48.47072&amp;mlon=11.56554#map=17/48.47072/11.56554">
          View Larger Map
        </a>
      </small>
    </Container>
  );
}
export default Anfahrt;
const Container = styled.div`
  background: white;
  padding: 2rem 1rem 4rem;
  border-bottom: 0.25rem solid ${colors.main.default};
`;
