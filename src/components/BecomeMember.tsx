import React from "react";
import styled from "styled-components";

function BecomeAMember() {
  return <Button>Jetzt Mitglied werden {">"}</Button>;
}
export default BecomeAMember;

const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  background: var(--highlight-color);
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`;
