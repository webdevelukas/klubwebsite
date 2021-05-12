import React from "react";
import Chip from "./Chip";
import styled from "styled-components";

function Chips({ groups }) {
  return (
    <Container>
      {groups.map(({ name }, index) => (
        <Chip key={index}>{name}</Chip>
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
