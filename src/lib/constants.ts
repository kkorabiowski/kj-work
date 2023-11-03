import { LanguageItemType } from '@/components/commons/language-item';

export const navItems = [
  {
    id: 1,
    label: 'Strona główna',
    href: '/',
  },
  {
    id: 2,
    label: 'O nas',
    href: '/o-nas',
  },
  {
    id: 3,
    label: 'Dla pracownika',
    href: '/dla-pracownika',
  },
  {
    id: 4,
    label: 'Dla pracodawcy',
    href: '/dla-pracodawcy',
  },
  {
    id: 5,
    label: 'Kontakt',
    href: '/kontakt',
  },
];

export const footerLinks = {
  links: [
    {
      label: 'O nas',
      href: '/o-nas',
    },
    {
      label: 'Oferty pracy',
      href: '/oferty-pracy',
    },
    {
      label: 'Kontakt',
      href: '/kontakt',
    },
  ],
  resources: [
    {
      label: 'Dla pracownika',
      href: '/dla-pracownika',
    },
    {
      label: 'Dla pracodawcy',
      href: '/dla-pracodawcy',
    },
  ],
};

export const filters = [
  {
    groupLabel: 'Tryb zatrudnienia',
    items: [
      { label: 'Umowa o pracę', value: 'contract-of-employment' },
      { label: 'Umowa zlecenie', value: 'mandate-contract' },
      { label: 'Tymczasowa', value: 'temporary' },
    ],
  },
  {
    groupLabel: 'Branża',
    items: [
      { label: 'Budownictwo', value: 'construction' },
      { label: 'Transport', value: 'transport' },
      { label: 'Gastronomia', value: 'gastronomy' },
      { label: 'Logistyka', value: 'logistic' },
      { label: 'Produkcja', value: 'production' },
      { label: 'IT', value: 'it' },
    ],
  },
];

export const languages: Omit<LanguageItemType, 'handleClick'>[] = [
  {
    locale: 'pl',
    label: 'PL',
    iconName: 'poland',
  },
  {
    locale: 'de',
    label: 'DE',
    iconName: 'germany',
  },
  {
    locale: 'en',
    label: 'EN',
    iconName: 'uk',
  },
];
