import { useEffect, useState } from 'react';

const useKeyHandle = (key, handle) => {
  const [keyHandle, setKeyHandle] = useState(null);

  useEffect(() => {
    const handleAction = e => {
      if (e.key === key) {
        handle();
      }
    };

    window.addEventListener('keydown', handleAction);

    return () => {
      window.removeEventListener('keydown', handleAction);
    };
  }, [key, handle]);

  return keyHandle;
};

export default useKeyHandle;
