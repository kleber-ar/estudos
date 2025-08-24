import { useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: unknown
): [unknown, (value: unknown) => void, () => void] {
  const [storedValue, setStoredValue] = useState(
    JSON.parse(localStorage.getItem(key) as string) || initialValue
  );

  const setValue = (value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredValue(value);
  };

  const clearValue = () => {
    localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, clearValue];
}
