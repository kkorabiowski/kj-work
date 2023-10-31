import { Container } from '@/components/container';
import { Hero } from '@/components/hero/hero';

export default function HomePage() {
  return (
    <div className="bg-[#d9e8ef] w-full">
      <Container>
        <Hero />
      </Container>
    </div>
  );
}
