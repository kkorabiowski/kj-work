'use client';
import { useTranslations } from 'next-intl';

import { useWindowWidth } from '@/hooks/use-window-width';

import { SortSelect } from '@/components/commons/sort-select';

import { MobileFilters } from './mobile-filters/mobile-filters';

type Props = {
  results: number;
  isPending: boolean;
};

export const ResultsBar = ({ results = 0, isPending }: Props) => {
  const t = useTranslations('offers.filters');
  const width = useWindowWidth();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h5>{t('availableOffers')}</h5>
        <p className="text-muted-foreground">{t('results', { results })}</p>
      </div>
      {typeof width === 'number' && width > 768 ? (
        <SortSelect />
      ) : (
        <MobileFilters isPending={isPending} />
      )}
    </div>
  );
};
