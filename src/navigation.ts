import { createSharedPathnamesNavigation } from 'next-intl/navigation';

const locales = ['pl', 'de'] as const;

export const { Link, useRouter, usePathname, redirect } =
  createSharedPathnamesNavigation({ locales });
