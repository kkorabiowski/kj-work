import { useTranslations } from 'next-intl';

export const useNavItems = () => {
  const t = useTranslations('layout.navigation');

  const navItems = [
    {
      id: 1,
      label: t('home'),
      href: '/',
    },
    {
      id: 2,
      label: t('aboutUs'),
      href: '/o-nas',
    },
    {
      id: 3,
      label: t('employeeZone'),
      href: '/dla-pracownika',
    },
    {
      id: 4,
      label: t('employerZone'),
      href: '/dla-pracodawcy',
    },
    {
      id: 5,
      label: t('contact'),
      href: '/kontakt',
    },
  ];

  return { navItems };
};
