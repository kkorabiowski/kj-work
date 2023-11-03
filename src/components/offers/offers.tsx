'use client';

import { useWindowSize } from '@/hooks/use-width';

import { Container } from '@/components/commons/container';

import { OffersFilterBar } from './components/offers-filter-bar';
import { OffersFilters } from './components/offers-filters';
import { OffersListing } from './components/offers-listing';

// TODO: ADD MOBILE FILTERS (DIALOG OR SHEET)
// TODO: CHANGE LANGUAGE SELECT

export const Offers = () => {
  const screen = useWindowSize();

  return (
    <Container className="mt-10">
      <div className="bg-text-muted">
        <h1 className="text-primary text-center">
          Znajdź odpowiednią ofertę i{' '}
          <span className="text-accent">zaaplikuj</span>
        </h1>
        <p className="text-muted-foreground text-center">
          Przeszukaj nasze oferty i znajdź coś dla siebie
        </p>
      </div>
      <div className="pt-10 pb-20">
        <section className="space-y-2.5 rounded-sm">
          <div className="flex gap-5">
            {typeof screen.width === 'number' && screen?.width > 768 ? (
              <OffersFilters />
            ) : null}
            <div className="w-full space-y-5">
              <OffersFilterBar results={10} />
              <OffersListing />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};
