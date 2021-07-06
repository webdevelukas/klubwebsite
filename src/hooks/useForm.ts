import React, { useState, useEffect } from "react";
import { validateValues, validateValue } from "services/formValidationRules";

function useForm(callback: () => void) {
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      callback();
    }
  }, [callback, errors, isSubmitting]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validateValues(values));
    setIsSubmitting(true);
  };

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const newValues = { ...values, [event.target.name]: event.target.value };
    event.persist();
    setIsSubmitting(false);
    setErrors(validateValue(newValues));
    setValues(newValues);
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
}

export default useForm;
