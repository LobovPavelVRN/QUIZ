import { useRef } from 'react';

export const useDebounce = () => {
  const debounce = useRef<number | null>(null);

  const fn = (func: () => void, timeout: number) => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    debounce.current = setTimeout(() => {
      func();
      debounce.current = null;
    }, timeout);
  };

  return fn;
};