import React, { useState } from "react";
import styled from "styled-components";
import NextLink from "next/link";
import FormElement from "./FormElement";

type CheckboxProps = {
  id: string;
  name: string;
  required?: true;
  label: string;
  error: string;
};

export function Checkbox({ ...props }: CheckboxProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const { label, id, required, error } = props;

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleCheckboxClick = () => {
    setChecked(!checked);
  };

  return (
    <FormElement label={label} id={id} required={required} error={error}>
      <Container>
        <div>
          <HiddenCheckbox
            type="checkbox"
            checked={checked}
            onChange={handleCheckboxChange}
            {...props}
          />
          <StyledCheckbox checked={checked} onClick={handleCheckboxClick}>
            <Checkmark viewBox="0 0 24 24">
              <polyline points="20 6 9 17 4 12" />
            </Checkmark>
          </StyledCheckbox>
        </div>
        <Description>
          Ja, ich stimme den allgemeinen{" "}
          <NextLink href="/datenschutz">
            <a>Datenschutzbedingungen</a>
          </NextLink>{" "}
          zu.
        </Description>
      </Container>
    </FormElement>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: var(--small-spacing);
  align-items: center;
  justify-content: start;
  user-select: none;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Checkmark = styled.svg`
  fill: none;
  stroke: var(--content-background-alternative);
  stroke-width: 3px;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 1.9rem;
  height: 2rem;
  background: ${({ checked }) =>
    checked
      ? "var(--highlight-color)"
      : "var(--content-background-alternative)"};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;

  ${HiddenCheckbox}:focus + & {
    outline-style: auto;
    outline-width: 1px;
    outline-color: var(--outline-color);
  }

  ${Checkmark} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

const Description = styled.p`
  user-select: text;
`;
