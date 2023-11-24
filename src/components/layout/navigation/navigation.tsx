'use client';
import React from 'react';

import { cn } from '@/lib/utils';
import { useWindowScroll } from '@/hooks/use-scroll';
import { useWindowWidth } from '@/hooks/use-window-width';

import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';

import { Link } from '@/navigation';

import { DesktopMenu } from './components/desktop-menu/desktop-menu';
import { MobileMenu } from './components/mobile-menu/mobile-menu';

export const Navigation = () => {
  const width = useWindowWidth();
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
            <Icon
              name="logo-cropped-transparent"
              className="h-full w-36 md:w-44"
            />
          </Link>
        </div>
        {typeof width === 'number' && width > 1024 ? (
          <DesktopMenu />
        ) : width ? (
          <MobileMenu />
        ) : null}
      </Container>
    </nav>
  );
};
