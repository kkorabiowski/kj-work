import { useTranslations } from 'next-intl';

export const useFooter = () => {
  const t = useTranslations('footer');

  const footerLinks = {
    links: [
      {
        label: t('aboutUs'),
        href: '/o-nas',
      },
      {
        label: t('offers'),
        href: '/oferty-pracy',
      },
      {
        label: t('contact'),
        href: '/kontakt',
      },
    ],
    resources: [
      {
        label: t('employeeZone'),
        href: '/dla-pracownika',
      },
      {
        label: t('employerZone'),
        href: '/dla-pracodawcy',
      },
    ],
  };

  return { footerLinks };
};
