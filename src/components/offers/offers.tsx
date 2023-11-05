'use client';

import { useWindowSize } from '@/hooks/use-window-size';

import { Container } from '@/components/commons/container';

import { OffersFilterBar } from './components/offers-filter-bar';
import { OffersFilters } from './components/offers-filters';
import { OffersListing } from './components/offers-listing';
import { SearchPanel } from './components/search-panel';

// TODO: ADD MOBILE FILTERS (DIALOG OR SHEET)
// TODO: CHANGE LANGUAGE SELECT
// TODO: MENU DYNAMIC IMPORT

export const Offers = () => {
  const size = useWindowSize();

  return (
    <Container className="mt-10">
      <div className="bg-text-muted space-y-2">
        <h1 className="text-primary text-center">
          Znajdź odpowiednią ofertę i{' '}
          <span className="text-accent">zaaplikuj</span>
        </h1>
        <p className="text-muted-foreground text-center">
          Przeszukaj nasze oferty i znajdź coś dla siebie
        </p>
      </div>
      <SearchPanel />
      <div className="pt-10 pb-20">
        <section className="space-y-2.5 rounded-sm">
          <div className="flex gap-5">
            {typeof size.width === 'number' && size?.width > 768 ? (
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
