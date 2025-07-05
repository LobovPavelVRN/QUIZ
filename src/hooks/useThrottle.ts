import { useRef } from 'react';

export const useThrottle = () => {
  const throttle = useRef<boolean>(false);

  const fn = (func: () => void, timeout: number) => {
    if (!throttle.current) {
      func();
      throttle.current = true;

      setTimeout(() => {
        throttle.current = false;
      }, timeout);
    }
  };

  return fn;
};