type ValidationProps = { email?: string; password?: string };

export function validateValues(values: ValidationProps) {
  let errors: ValidationProps = {};
  if (!values.email) {
    errors.email = "Die E-Mail Adresse wird benötigt";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Die E-Mail Adresse ist ungültig";
  }
  if (!values.password) {
    errors.password = "Das Passwort wird benötigt";
  } else if (values.password.length < 8) {
    errors.password = "Das Passwort muss länger als 8 Zeichen lang sein";
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
  if (values.password && !values.password) {
    errors.password = "Das Passwort wird benötigt";
  } else if (values.password && values.password.length < 8) {
    errors.password = "Das Passwort muss länger als 8 Zeichen lang sein";
  }

  return errors;
}
