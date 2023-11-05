import { useWindowSize } from '@/hooks/use-window-size';

import { SortSelect } from '@/components/commons/sort-select';

import { MobileFilters } from './mobile-filters';

type Props = {
  results: number;
};

export const OffersFilterBar = ({ results = 0 }: Props) => {
  const size = useWindowSize();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h5>Dostępne oferty</h5>
        <p className="text-muted-foreground">Znaleziono {results} oferty</p>
      </div>
      {typeof size.width === 'number' && size?.width > 768 ? (
        <SortSelect />
      ) : (
        <MobileFilters />
      )}
    </div>
  );
};
