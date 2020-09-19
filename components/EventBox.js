import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../styles/colors";
import renderTime from "services/renderTime";
import renderDayAndDate from "services/renderDayAndDate";
EventBox.propTypes = {};
function EventBox({ event }) {
  const { group } = event;
  return (
    <Article>
      <Date>{renderDayAndDate(event?.dateandtime)}</Date>
      <Time>{renderTime(event?.dateandtime)} Uhr</Time>
      <Wrapper>
        <SportsPictogram src="/pictogram.svg" />
        <AgeGroup>{group?.name}</AgeGroup>
      </Wrapper>
      <OpponentsContainer>
        <Logo src="/tsv-paunzhausen.png" />
        <Logo src="/tsv-paunzhausen.png" />
      </OpponentsContainer>
    </Article>
  );
}
export default EventBox;
const Article = styled.article`
  position: relative;
  padding: 1rem;
  background: white;
  border-bottom: 0.25rem solid ${colors.secondary};
`;
const Date = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
  color: ${colors.main.default};
  text-transform: uppercase;
`;
const Time = styled.p`
  color: ${colors.main.default};
  text-transform: uppercase;
  line-height: 1rem;
`;
const Wrapper = styled.div`
  margin-top: 0.75rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 0.5rem;
`;
const SportsPictogram = styled.img`
  height: auto;
  width: 1.25rem;
  object-fit: contain;
  align-self: center;
`;
const AgeGroup = styled.p`
  align-self: end;
`;
const OpponentsContainer = styled.div`
  position: absolute;
  right: 0.75rem;
  bottom: 0.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
`;
const Logo = styled.img`
  height: 2.75rem;
  width: auto;
  object-fit: contain;
`;
