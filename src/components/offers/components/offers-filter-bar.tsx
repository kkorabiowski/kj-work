import { SortSelect } from '@/components/commons/sort-select';

type Props = {
  results: number;
};

export const OffersFilterBar = ({ results = 0 }: Props) => (
  <div className="flex justify-between items-center">
    <div>
      <h5>Dostępne oferty</h5>
      <p className="text-muted-foreground">Znaleziono {results} oferty</p>
    </div>
    <SortSelect />
  </div>
);
