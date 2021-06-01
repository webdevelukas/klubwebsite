import styled from "styled-components";
import { colors } from "styles/colors";
const Chip = styled.div`
  background: ${colors.main.default};
  font-weight: bold;
  font-size: 0.75rem;
  color: white;
  padding: 0.125rem 0.5rem;
  margin: 0 0.25rem 0.25rem 0;
  &:last-child {
    margin: 0;
  }
`;
export default Chip;
