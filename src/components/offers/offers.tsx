import { Container } from '@/components/commons/container';

import { OffersFilterBar } from './components/offers-filter-bar';
import { OffersFilters } from './components/offers-filters';
import { OffersListing } from './components/offers-listing';

export const Offers = () => (
  <Container className="mt-10">
    <div className="bg-text-muted">
      <h1 className="text-primary text-center">
        Znajdź odpowiednią ofertę i{' '}
        <span className="text-accent">zaaplikuj</span>
      </h1>
      <p className="text-muted-foreground text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        odit.
      </p>
    </div>
    <div className="pt-10 pb-20">
      <section className="space-y-2.5 rounded-sm">
        <div className="flex gap-5">
          <OffersFilters />
          <div className="w-full">
            <OffersFilterBar results={10} />
            <OffersListing />
          </div>
        </div>
      </section>
    </div>
  </Container>
);
