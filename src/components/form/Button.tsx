import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background-color: var(--highlight-color);
  padding: var(--medium-spacing);
  border-radius: var(--border-radius);
  color: var(--content-background);
  font-weight: bold;

  svg {
    position: absolute;
    fill: var(--content-background);
    height: 1.5rem;
    width: 1.5rem;
    top: 0;
    bottom: 0;
    right: 0.5rem;
    margin: auto 0;
  }
`;
