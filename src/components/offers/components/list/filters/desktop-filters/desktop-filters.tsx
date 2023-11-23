import { filters } from '@/lib/constants';

import { Button } from '@/components/ui/button';

import { FilterItem } from './components/filter-item';
import { useDesktopFilters } from './desktop-filters.controller';

export const DesktopFilters = () => {
  const { t, clearFilters } = useDesktopFilters();

  return (
    <div className="w-80 space-y-3">
      <h3>{t('filters.filters')}</h3>
      {filters.map(({ groupLabel, items }) => (
        <div key={groupLabel} className="space-y-2">
          <p className="font-semibold">{groupLabel}</p>
          {items.map(({ label, value }, index) => (
            <FilterItem
              key={value}
              label={label}
              value={value}
              formKey={groupLabel === 'Branża' ? 'industry' : 'agreement_type'}
            />
          ))}
        </div>
      ))}
      <div className="pt-10 flex gap-2.5">
        <Button type="submit" size="sm">
          {t('filters.saveFilters')}
        </Button>
        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={clearFilters}
        >
          {t('filters.clearFilters')}
        </Button>
      </div>
    </div>
  );
};
