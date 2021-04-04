import { useEffect, useRef } from "react";

// custom hook which will only trigger the callback function (effect) on re-render, not on initial render. second parameter (deps) works the same as useEffect dependency array.

//TODO: resolve warnings generated from not including effect in dependency array

const useEffectUpdate = (effect, deps) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      effect();
    }
  }, deps);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);
};

export default useEffectUpdate;
