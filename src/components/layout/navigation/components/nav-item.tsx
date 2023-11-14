'use client';
import { useSelectedLayoutSegment } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Link } from '@/navigation';

type Props = {
  label: string;
  href: string;
  className?: string;
  isFooter?: boolean;
};

export const NavItem = ({ href, label, className, isFooter }: Props) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'font-semibold text-base text-primary/60',
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
