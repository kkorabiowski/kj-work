'use client';
import Link from 'next/link';
import React from 'react';

import { cn } from '@/lib/utils';
import { useWindowScroll } from '@/hooks/use-scroll';
import { useWindowSize } from '@/hooks/use-window-size';

import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';

import { DesktopMenu } from './components/desktop-menu';
import { MobileMenu } from './components/mobile-menu';

export const Navigation = () => {
  const size = useWindowSize();
  const scroll = useWindowScroll();

  return (
    <nav
      className={cn(
        'transition-all duration-300 py-5 sticky left-0 right-0 top-0 bg-background z-50',
        scroll && 'shadow-md'
      )}
    >
      <Container className="flex justify-between items-center gap-5">
        <div>
          <Link href="/">
            <Icon name="logo-cropped-transparent" className="h-full w-44" />
          </Link>
        </div>

        {size?.width && typeof size.width === 'number' && size.width > 1024 ? (
          <DesktopMenu />
        ) : size?.width ? (
          <MobileMenu />
        ) : null}
      </Container>
    </nav>
  );
};
