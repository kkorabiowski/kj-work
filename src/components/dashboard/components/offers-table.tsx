'use client';
import { useOffersQuery } from '@/hooks/queries/use-offers-query';

import { Skeleton } from '@/components/commons/skeleton';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { RowAction } from './row-action';

type Offer = {
  id: string;
  title: string;
  company: {
    name: string;
    picture: string;
  };
  agreement_type: string;
  location: string;
  category: string;
  created_at: Date;
  expiration_date?: string;
};

const OffersTable = () => {
  const { data, error, refetch } = useOffersQuery();

  const refresh = () => {
    refetch();
  };

  if (error) {
    return <h1>Coś poszło nie tak...</h1>;
  }

  return (
    <Table className="mt-5">
      <TableCaption>Aktualna lista ofert</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nr oferty</TableHead>
          <TableHead>Nazwa oferty</TableHead>
          <TableHead>Firma</TableHead>
          <TableHead>Kategoria</TableHead>
          <TableHead>Utworzono</TableHead>
          <TableHead>Ważna do</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">&nbsp;</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.offers ? (
          data.offers.map(
            ({
              category,
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
                <TableCell>{category || 'brak'}</TableCell>
                <TableCell>{created_at.toString().slice(0, 10)}</TableCell>
                <TableCell>{expiration_date || 'brak'}</TableCell>
                <TableCell>Aktywna</TableCell>
                <TableCell className="text-right">
                  <RowAction offerId={id} refresh={refresh} />
                </TableCell>
              </TableRow>
            )
          )
        ) : (
          <TableRow className="space-y-2.5 mt-10">
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
            <TableCell>
              <Skeleton className="w-full h-10" />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default OffersTable;
