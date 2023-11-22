import { Skeleton } from '@/components/commons/skeleton';

export const OffersListSkeleton = () => (
  <div className="space-y-2.5 mt-10">
    <Skeleton className="w-full h-10" />
    <Skeleton className="w-full h-20" />
    <Skeleton className="w-full h-20" />
  </div>
);
