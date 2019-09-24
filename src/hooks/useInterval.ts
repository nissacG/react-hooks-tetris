import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number) {
  // keeps typescript happy
  const noop = () => {};
  const savedCallback = useRef(noop);
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => savedCallback.current()
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay]);
}