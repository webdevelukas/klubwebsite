import React from "react";
import styled from "styled-components";
import Label from "./Label";
import ErrorMessage from "./ErrorMessage";

type FormElementProps = {
  id: string;
  required?: true;
  error: string;
  label: string;
  children: React.ReactNode;
};

function FormElement({
  id,
  required,
  error,
  label,
  children,
}: FormElementProps) {
  return (
    <Container>
      <Label id={id} required={required}>
        {label}
      </Label>
      {children}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
}

export default FormElement;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-gap: var(--small-spacing);
`;
