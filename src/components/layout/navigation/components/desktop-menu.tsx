import { useTranslations } from 'next-intl';
import React from 'react';

import { LanguageSelect } from '@/components/commons/language-select';
import { Button } from '@/components/ui/button';

import { Link } from '@/navigation';

import { NavItem } from './nav-item';
import { useNavItems } from '../navigation.controller';

export const DesktopMenu = () => {
  const t = useTranslations('layout');
  const { navItems } = useNavItems();

  return (
    <div className="flex items-center gap-8">
      {navItems.map(navItem => (
        <NavItem key={navItem.id} {...navItem} />
      ))}
      <Link href="/oferty-pracy">
        <Button variant="accent">{t('offersLabel')}</Button>
      </Link>
      <LanguageSelect />
    </div>
  );
};
