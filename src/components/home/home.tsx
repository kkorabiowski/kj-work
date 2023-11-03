import { Specialization } from '@/components/about-us/components/specialization';
import { WhoAreWe } from '@/components/about-us/components/who-are-we';
import { Container } from '@/components/commons/container';
import { Hero } from '@/components/home/components/hero';

import { HomeOffers } from './components/home-offers';

export const Home = () => (
  <div className="bg-background w-full">
    <Container>
      <Hero />
      <WhoAreWe />
      <Specialization />
      <HomeOffers />
    </Container>
  </div>
);
