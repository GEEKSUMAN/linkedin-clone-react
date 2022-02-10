import { useRef } from 'react';

let uniqueId = 0;
const getUniqueId = () => uniqueId++;

function useComponentId() {
  const idRef = useRef(getUniqueId());
  return idRef.current;
}

export default useComponentId