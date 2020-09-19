import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Partner from "../Partner";
import ComponentSection from "../../elements/Section";
PartnersSection.propTypes = {};
const partnersLogos = [
  "https://www.tsvpaunzhausen.de/files/5514/2298/8029/ELGAKU_Logo_quad_RGB.png",
  "https://www.tsvpaunzhausen.de/files/3815/1130/1930/Logo_Aschauer_RGB.png",
  "https://www.tsvpaunzhausen.de/files/6414/2298/8030/Munich_airport_2015_RGB.png",
  "https://www.tsvpaunzhausen.de/files/5514/2298/8029/Logo_MERL_quad_RGB.png",
  "https://www.tsvpaunzhausen.de/files/8614/2298/7933/Beck_AVM_logo_2013_RGB.png",
  "https://deinklub.de/wp-content/uploads/2018/11/deinklub_logo-weiss-vektor.svg",
];
function PartnersSection(props) {
  return (
    <ComponentSection title="Unsere Partner">
      <Container>
        {partnersLogos.map((logoUrl, index) => (
          <Partner key={index} logoUrl={logoUrl} />
        ))}
      </Container>
    </ComponentSection>
  );
}
export default PartnersSection;
const Container = styled.div`
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6.25rem, 1fr));
  grid-gap: 2rem;
`;
