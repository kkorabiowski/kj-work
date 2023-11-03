'use client';

import { useEffect, useState } from 'react';

export const useWindowScroll = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const scrollHandler = () => {
      setScrollOffset(window.scrollY);
    };

    if (window) {
      window.addEventListener('scroll', scrollHandler);
    }

    return () => removeEventListener('scroll', scrollHandler);
  }, []);

  return scrollOffset;
};
