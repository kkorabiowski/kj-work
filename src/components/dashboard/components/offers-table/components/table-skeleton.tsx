import { Skeleton } from '@/components/commons/skeleton';
import { TableCell, TableRow } from '@/components/ui/table';

export const TableSkeleton = () => (
  <TableRow className="space-y-2.5 mt-10">
    {Array.from([1, 2, 3, 4, 5, 6, 7, 8], item => (
      <TableCell key={item}>
        <Skeleton className="w-full h-10" />
      </TableCell>
    ))}
  </TableRow>
);
