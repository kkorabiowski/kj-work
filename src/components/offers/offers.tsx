import { OffersFilterBar } from './components/offers-filter-bar';
import { OffersFilters } from './components/offers-filters';
import { OffersListing } from './components/offers-listing';

export const Offers = () => {
  return (
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
  );
};
