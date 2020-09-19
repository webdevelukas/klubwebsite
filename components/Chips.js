import React from "react";
import PropTypes from "prop-types";
import Chip from "./Chip";
import styled from "styled-components";
function Chips({ chips }) {
  return (
    <Container>
      {chips.map((category) => (
        <Chip key={category}>{category}</Chip>
      ))}
    </Container>
  );
}
export default Chips;
const Container = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
`;
