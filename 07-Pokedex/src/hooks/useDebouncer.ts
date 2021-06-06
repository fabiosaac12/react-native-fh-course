import { useState, useEffect } from 'react';

export const useDebouncer = <T>(initialValue: T, time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), time);

    return () => clearTimeout(timeout);
  }, [value]);

  return {
    value: debouncedValue,
    setValue,
  };
};
