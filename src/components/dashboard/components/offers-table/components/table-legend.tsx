import clsx from 'clsx';

import { TableHead } from '@/components/ui/table';

const legend = [
  'Nr oferty',
  'Nazwa oferty',
  'Firma',
  'Kategoria',
  'Utworzono',
  'Ważna do',
  'Status',
  '',
];

export const TableLegend = () => (
  <>
    {legend.map((item, index) => (
      <TableHead
        key={item}
        className={clsx(index === legend.length && 'text-right')}
      >
        {item}
      </TableHead>
    ))}
  </>
);
