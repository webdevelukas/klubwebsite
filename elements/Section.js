import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "styles/colors";
ComponentSection.propTypes = {};
function ComponentSection({ title, children }) {
  return (
    <Section>
      {title && <Headline>{title}</Headline>}
      {children}
    </Section>
  );
}
export default ComponentSection;
const Section = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 1rem;
`;
const Headline = styled.h2`
  font-size: 1rem;
  text-transform: uppercase;
  justify-self: center;
  color: ${colors.main.default};
`;
