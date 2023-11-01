'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

type Props = {
  label: string;
  href: string;
  className?: string;
  isFooter?: boolean;
};

export const NavItem = ({ href, label, className, isFooter }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'font-semibold text-lg text-primary/60',
        isActive && !isFooter && 'text-primary font-extrabold',
        isFooter &&
          'text-muted-foreground font-normal block hover:text-white transition-all duration-250',
        className
      )}
    >
      {label}
    </Link>
  );
};
