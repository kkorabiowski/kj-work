import { Skeleton } from '@/components/commons/skeleton';
import { Container } from '@/components/container';

export default function Loading() {
  return (
    <Container>
      <div className="space-y-3 mt-10">
        {[1, 2, 3, 4, 5].map(item => (
          <Skeleton key={item} className="w-full h-12" />
        ))}
      </div>
    </Container>
  );
}
