type ValidationProps = { email?: string };

export function validateValues(values: ValidationProps) {
  let errors: ValidationProps = {};
  if (!values.email) {
    errors.email = "Die E-Mail Adresse wird benötigt";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Die E-Mail Adresse ist ungültig";
  }

  return errors;
}

export function validateValue(values: ValidationProps) {
  let errors: ValidationProps = {};
  if (values.email && !values.email) {
    errors.email = "Die E-Mail Adresse wird benötigt";
  } else if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Die E-Mail Adresse ist ungültig";
  }

  return errors;
}
