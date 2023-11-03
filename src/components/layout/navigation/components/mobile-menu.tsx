import { Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { navItems } from '@/lib/constants';

import { LanguageSelect } from '@/components/commons/language-select';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { NavItem } from './nav-item';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

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
              <Button variant="accent">Oferty pracy</Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
