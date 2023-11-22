'use client';

import { useLayoutEffect, useState } from 'react';

export const useWindowWidth = () => {
  const [windowSize, setWindowSize] = useState(0);

  const handleSize = () => {
    setWindowSize(window.innerWidth);
  };

  useLayoutEffect(() => {
    handleSize();
    window.addEventListener('resize', handleSize);
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};
