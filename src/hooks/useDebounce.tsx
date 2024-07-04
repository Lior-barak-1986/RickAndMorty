import { useEffect, useState } from "react";

const useDebounce = (val: string, delay = 300) => {
  const [debounceVal, setDebounceVal] = useState(val);
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceVal(val);
    }, delay);
    return () => clearTimeout(id);
  }, [val, delay]);

  return {
    debounceVal,
  };
};

export default useDebounce;
