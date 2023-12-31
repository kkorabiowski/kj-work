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
];

export const industries = [
  { label: 'Budownictwo', value: 'construction' },
  { label: 'Transport', value: 'transport' },
  { label: 'Gastronomia', value: 'gastronomy' },
  { label: 'Logistyka', value: 'logistic' },
  { label: 'Produkcja', value: 'production' },
  { label: 'IT', value: 'it' },
];

export const agreement_types = [
  { label: 'Umowa o pracę', value: 'contract-of-employment' },
  { label: 'Umowa zlecenie', value: 'mandate-contract' },
  { label: 'Tymczasowa', value: 'temporary' },
];

export const exp_dates = [
  { label: '30 dni', value: '30d' },
  { label: '60 dni', value: '60d' },
  { label: '90 dni', value: '90d' },
  { label: '120 dni', value: '120d' },
  { label: '180 dni', value: '180d' },
];
