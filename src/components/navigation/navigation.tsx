import Link from 'next/link';
import React from 'react';

import { DesktopMenu } from './components/desktop-menu';
import { Container } from '../container';

export const Navigation = React.memo(() => (
  <nav className="py-5 sticky left-0 right-0 top-0 bg-[#d9e8ef] z-50">
    <Container className="flex justify-between items-center gap-5">
      <div>
        <Link href="/">
          <h3>Logo</h3>
        </Link>
      </div>
      <DesktopMenu />
    </Container>
  </nav>
));
