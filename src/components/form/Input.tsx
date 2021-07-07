import styled from "styled-components";
import FormElement from "./FormElement";

type InputProps = {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  required?: true;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error: string;
};

export function Input({ ...props }: InputProps) {
  const { label, id, required, error } = props;

  return (
    <FormElement label={label} id={id} required={required} error={error}>
      <StyledInput {...props} />
    </FormElement>
  );
}

const StyledInput = styled.input`
  border-radius: var(--border-radius);
  padding: var(--medium-spacing);
  background-color: var(--content-background-alternative);

  ::placeholder {
    color: var(--text-color-light);
  }
`;
