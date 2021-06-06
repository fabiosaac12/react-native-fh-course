import { useState } from 'react';

export const useForm = <T extends Object>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = <K>(name: keyof T, value: K) =>
    setValues(values => ({ ...values, [name]: value }));

  return {
    values,
    handleChange
  };
};
