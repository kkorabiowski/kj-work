import { Menu } from 'lucide-react';

import { LanguageSelect } from '@/components/commons/language-select';
import { LogOutBtn } from '@/components/commons/log-out-btn';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Link } from '@/navigation';

import { useMobileMenu } from './mobile-menu.controller';
import { NavItem } from '../nav-item';

export const MobileMenu = () => {
  const { isOpen, navItems, session, t, setIsOpen } = useMobileMenu();
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
            {session.data ? (
              <>
                <NavItem label="Dashboard" href="/dashboard" />
                <LogOutBtn />
              </>
            ) : null}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
