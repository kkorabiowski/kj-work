import React from 'react';

import { navItems } from '@/lib/constants';

import { NavItem } from './nav-item';

export const DesktopMenu = React.memo(() => (
  <div className="flex items-center gap-8">
    {navItems.map(navItem => (
      <NavItem key={navItem.id} {...navItem} />
    ))}
  </div>
));
