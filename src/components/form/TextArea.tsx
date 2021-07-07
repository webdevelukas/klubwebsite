import styled from "styled-components";
import FormElement from "./FormElement";

type TextAreaProps = {
  id: string;
  name: string;
  placeholder: string;
  required?: true;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  error: string;
};

export function TextArea({ ...props }: TextAreaProps) {
  const { label, id, required, error } = props;

  return (
    <FormElement label={label} id={id} required={required} error={error}>
      <StyledTextArea {...props} />
    </FormElement>
  );
}

export const StyledTextArea = styled.textarea`
  border-radius: var(--border-radius);
  padding: var(--medium-spacing);
  background-color: var(--content-background-alternative);
  resize: none;
  height: 10rem;

  ::placeholder {
    color: var(--text-color-light);
  }
`;
