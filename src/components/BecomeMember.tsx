import React from "react";
import styled from "styled-components";
import { colors } from "styles/colors";

function BecomeAMember() {
  return <Button>Jetzt Mitglied werden {">"}</Button>;
}
export default BecomeAMember;

const Button = styled.button`
  padding: 1rem 2rem;
  width: 100%;
  background: ${colors.secondary};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`;
