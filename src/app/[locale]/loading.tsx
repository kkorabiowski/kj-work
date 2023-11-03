import { Container } from '@/components/commons/container';
import { Skeleton } from '@/components/commons/skeleton';

export default function Loading() {
  return (
    <Container>
      <div className="space-y-3 mt-10">
        <Skeleton className="w-1/4 mx-auto h-12" />
        <div className="mt-5">
          <Skeleton className="w-full h-40" />
        </div>
      </div>
    </Container>
  );
}
