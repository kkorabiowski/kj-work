import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { LanguageSelect } from '@/components/commons/language-select';
import { LogOutBtn } from '@/components/commons/log-out-btn';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Link } from '@/navigation';

import { NavItem } from './nav-item';
import { useNavItems } from '../navigation.controller';

export const MobileMenu = () => {
  const t = useTranslations('layout');
  const [isOpen, setIsOpen] = useState(false);
  const { navItems } = useNavItems();
  const pathname = usePathname();
  const session = useSession();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <div className="flex gap-2.5 items-center">
      <LanguageSelect />
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <div>
            <Menu />
          </div>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col py-20 items-center h-full justify-evenly">
            {navItems.map(navItem => (
              <NavItem key={navItem.id} {...navItem} />
            ))}
            <Link href="/oferty-pracy">
              <Button variant="accent">{t('offersLabel')}</Button>
            </Link>
            <NavItem label="Dashboard" href="/dashboard" />
            {session.data ? <LogOutBtn /> : null}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
