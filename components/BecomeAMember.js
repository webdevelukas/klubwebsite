import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "styles/colors";
BecomeAMember.propTypes = {};
function BecomeAMember(props) {
  return <Button>Jetzt Mitglied werden {">"}</Button>;
}
export default BecomeAMember;
const Button = styled.button`
  padding: 2rem;
  width: 100vw;
  background: ${colors.secondary};
  text-transform: uppercase;
  color: white;
  font-weight: bold;
`;
