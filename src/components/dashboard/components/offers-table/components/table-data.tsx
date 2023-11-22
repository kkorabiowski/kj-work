'use client';
import { getIndustryName, Industry } from '@/lib/helpers';
import { useOffersQuery } from '@/hooks/queries/use-offers-query';

import { TableCell, TableRow } from '@/components/ui/table';

import { RowAction } from './row-action';
import { TableSkeleton } from './table-skeleton';

type Offer = {
  id: string;
  title: string;
  company: {
    name: string;
    picture?: string;
  };
  agreement_type: string;
  location: string;
  industry: string;
  created_at: Date;
  expiration_date?: string;
};

export const TableData = () => {
  const { data, error, refetch } = useOffersQuery();

  if (error) {
    return <p className="text-center">Coś poszło nie tak...</p>;
  }

  return data?.offers ? (
    data.offers.map(
      ({
        industry,
        company,
        created_at,
        id,
        expiration_date,
        title,
      }: Offer) => (
        <TableRow key={id}>
          <TableCell className="font-medium">{id}</TableCell>
          <TableCell>{title}</TableCell>
          <TableCell>{company.name}</TableCell>
          <TableCell>
            {getIndustryName(industry as Industry) || 'brak'}
          </TableCell>
          <TableCell>{created_at.toString().slice(0, 10)}</TableCell>
          <TableCell>{expiration_date || 'brak'}</TableCell>
          <TableCell>Aktywna</TableCell>
          <TableCell className="text-right">
            <RowAction offerId={id} refresh={() => refetch()} />
          </TableCell>
        </TableRow>
      )
    )
  ) : (
    <TableSkeleton />
  );
};
