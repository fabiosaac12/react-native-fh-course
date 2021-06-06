import {useState} from 'react';

export const useForm = <T extends Object>(initialValues: T) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name: keyof T, value: any) => {
    setValues(values => ({...values, [name]: value}));
  };

  return {values, handleChange};
};
