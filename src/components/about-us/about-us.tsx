import { Container } from '@/components/commons/container';

import { AboutUsHero } from './components/about-us-hero';
import { OurJob } from './components/our-job';
import { Specialization } from './components/specialization';
import { WhoAreWe } from './components/who-are-we';

export const AboutUs = () => (
  <>
    <Container className="mt-10">
      <AboutUsHero />
      <WhoAreWe />
      <Specialization />
    </Container>
    <Container>
      <OurJob />
    </Container>
  </>
);
