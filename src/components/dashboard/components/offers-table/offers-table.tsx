'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { TableData } from './components/table-data';
import { TableLegend } from './components/table-legend';

export const OffersTable = () => {
  return (
    <Table className="mt-5">
      <TableCaption>Aktualna lista ofert</TableCaption>
      <TableHeader>
        <TableRow>
          <TableLegend />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableData />
      </TableBody>
    </Table>
  );
};
