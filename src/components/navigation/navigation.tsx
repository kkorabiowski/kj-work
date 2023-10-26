import Link from 'next/link';

import { navItems } from '@/lib/constants';

import { NavItem } from './components/nav-item';
import { Container } from '../container';

export const Navigation = () => (
  <nav className="py-5 sticky left-0 right-0 top-0 bg-background">
    <Container className="flex justify-between items-center gap-5">
      <div>
        <Link href="/">
          <h3>Logo</h3>
        </Link>
      </div>
      <div className="flex items-center gap-8">
        {navItems.map((navItem, index) => (
          <NavItem key={index} {...navItem} />
        ))}
      </div>
    </Container>
  </nav>
);
