'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  label: string;
  href: string;
};

export const NavItem = ({ href, label }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      className={cn(
        'text-muted-foreground font-medium',
        isActive && 'text-secondary font-bold'
      )}
      href="#"
    >
      {label}
    </Link>
  );
};
