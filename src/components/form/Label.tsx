import styled from "styled-components";

type LabelProps = {
  children: string;
  required?: true;
  id: string;
};

function Label({ children, required, id }: LabelProps) {
  return (
    <StyledLabel htmlFor={id}>
      {children}
      {required ? "*" : null}
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  font-size: 0.75rem;
  color: var(--text-color);
  padding-left: var(--small-spacing);
  user-select: none;
`;

export default Label;
