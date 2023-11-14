import { useTranslations } from 'next-intl';

import { useWindowSize } from '@/hooks/use-window-size';

import { SortSelect } from '@/components/commons/sort-select';

import { MobileFilters } from './mobile-filters';

type Props = {
  results: number;
};

export const OffersFilterBar = ({ results = 0 }: Props) => {
  const t = useTranslations('offers.filters');
  const size = useWindowSize();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h5>{t('availableOffers')}</h5>
        <p className="text-muted-foreground">{t('results', { results })}</p>
      </div>
      {typeof size.width === 'number' && size?.width > 768 ? (
        <SortSelect />
      ) : (
        <MobileFilters />
      )}
    </div>
  );
};
