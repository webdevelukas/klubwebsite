import styled from "styled-components";

const Chip = styled.div`
  background: var(--main-color);
  font-weight: bold;
  font-size: 0.75rem;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  margin: 0 0.25rem 0.25rem 0;
  &:last-child {
    margin: 0;
  }
`;
export default Chip;
