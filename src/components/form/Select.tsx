import styled from "styled-components";
import FormElement from "./FormElement";

type SelectProps = {
  id: string;
  name: string;
  placeholder: string;
  required?: true;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  error: string;
  options: string[];
};

export function Select({ ...props }: SelectProps) {
  const { label, id, required, error, options } = props;

  return (
    <FormElement label={label} id={id} required={required} error={error}>
      <SelectContainer {...props}>
        <Option value="">Bitte wähle einen Betreff</Option>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
      </SelectContainer>
      <Arrow>{">"}</Arrow>
    </FormElement>
  );
}

const SelectContainer = styled.select`
  border-radius: var(--border-radius);
  padding: var(--medium-spacing);
  background-color: var(--content-background-alternative);
  -moz-appearance: none;
  -webkit-appearance: none;
  color: var(--text-color-light);
`;

const Option = styled.option`
  position: absolute;
  padding: var(--medium-spacing);
  background-color: var(--content-background-alternative);
`;

const Arrow = styled.div`
  position: absolute;
  bottom: var(--medium-spacing);
  right: var(--medium-spacing);
  z-index: 10;
  font-weight: bold;
`;
