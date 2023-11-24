import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import { useNavItems } from '@/components/layout/navigation/navigation.controller';

export const useMobileMenu = () => {
  const t = useTranslations('layout');
  const [isOpen, setIsOpen] = useState(false);
  const { navItems } = useNavItems();
  const pathname = usePathname();
  const session = useSession();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return { t, isOpen, setIsOpen, navItems, session };
};
