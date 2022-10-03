import { useState } from 'react';

export default function useProxyState(initialState) {
  const [state, setState] = useState(initialState);

  const setProxyState = (data) => {
    setState((prev) => ({ ...prev, ...data }));
  };

  return [state, setProxyState];
}
