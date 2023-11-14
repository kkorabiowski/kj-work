import { useTranslations } from 'next-intl';

import { filters } from '@/lib/constants';

import { Button } from '@/components/ui/button';

import { FilterItem } from './filter-item';

export const OffersFilters = () => {
  const t = useTranslations('offers.filters');

  return (
    <div className="w-80 space-y-3">
      <h3>{t('filters')}</h3>
      {filters.map(({ groupLabel, items }) => (
        <div key={groupLabel} className="space-y-2">
          <h6>{groupLabel}</h6>
          {items.map(({ label, value }) => (
            <FilterItem key={value} label={label} value={value} />
          ))}
        </div>
      ))}
      <div className="pt-10">
        <Button>{t('save')}</Button>
      </div>
    </div>
  );
};
