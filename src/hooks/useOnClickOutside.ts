import { RefObject, useEffect } from 'react';

export default function useOnClickOutside(
  refs: RefObject<HTMLElement>[],
  handler: (event: MouseEvent | TouchEvent) => void,
  disabled?: boolean,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (disabled) {
        return;
      }

      const target = event.target as Node;

      const isClickOutsideRefs = refs.every((ref) => !ref.current?.contains(target));

      if (isClickOutsideRefs) {
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler, disabled]);
};
