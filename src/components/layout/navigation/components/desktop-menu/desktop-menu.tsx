import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React from 'react';

import { LanguageSelect } from '@/components/commons/language-select';
import { LogOutBtn } from '@/components/commons/log-out-btn';
import { NavItem } from '@/components/layout/navigation/components/nav-item';
import { useNavItems } from '@/components/layout/navigation/navigation.controller';
import { Button } from '@/components/ui/button';

import { Link } from '@/navigation';

export const DesktopMenu = () => {
  const t = useTranslations('layout');
  const session = useSession();
  const { navItems } = useNavItems();

  return (
    <div className="flex items-center gap-8">
      {session?.data ? <NavItem label="Dashboard" href="/dashboard" /> : null}
      {navItems.map(navItem => (
        <NavItem key={navItem.id} {...navItem} />
      ))}
      <Link href="/oferty-pracy">
        <Button variant="accent">{t('offersLabel')}</Button>
      </Link>
      {session?.data ? <LogOutBtn /> : null}
      <LanguageSelect />
    </div>
  );
};
