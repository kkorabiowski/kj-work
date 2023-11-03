import Link from 'next/link';
import React from 'react';

import { navItems } from '@/lib/constants';

import { LanguageSelect } from '@/components/commons/language-select';
import { Button } from '@/components/ui/button';

import { NavItem } from './nav-item';

export const DesktopMenu = React.memo(() => (
  <div className="flex items-center gap-8">
    {navItems.map(navItem => (
      <NavItem key={navItem.id} {...navItem} />
    ))}
    <Link href="/oferty-pracy">
      <Button variant="accent">Oferty pracy</Button>
    </Link>
    <LanguageSelect />
  </div>
));
