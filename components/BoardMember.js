import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ResponsiveImage from "elements/ResponsiveImage";
import { colors } from "styles/colors";
BoardMember.propTypes = {};
function BoardMember({ boardMember }) {
  return (
    <Container>
      <Image src={boardMember} />
      <H2>1. Vorstand</H2>
      <Position>Marco Katthagen</Position>
    </Container>
  );
}
export default BoardMember;
const Container = styled.article``;
const Image = styled(ResponsiveImage)``;
const H2 = styled.h2`
  color: ${colors.main.default};
  text-transform: uppercase;
  line-height: 1.5rem;
`;
const Position = styled.p``;
