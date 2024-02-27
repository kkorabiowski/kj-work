'use client';

import { DesktopFilters } from '@/components/offers/components/list/filters/desktop-filters/desktop-filters';
import { ResultsBar } from '@/components/offers/components/list/filters/results-bar';
import { SearchPanel } from '@/components/offers/components/list/filters/search-panel';
import {
  OffersList,
  OfferType,
} from '@/components/offers/components/list/offers-list';
import { Form } from '@/components/ui/form';

import { useOffers } from '../../offers.controller';

type Props = {
  count: number;
  offers: OfferType[];
};

export const FilterableListing = ({ offers }: Props) => {
  const { form, isError, isPending, isRefetching, onSubmit, width } =
    useOffers();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <SearchPanel isPending={isPending || isRefetching} />
        <div className="pt-10 pb-20">
          <section className="space-y-2.5 rounded-sm">
            <div className="flex gap-5">
              {typeof width === 'number' && width > 768 ? (
                <DesktopFilters />
              ) : null}
              <div className="w-full space-y-5">
                <ResultsBar
                  results={0}
                  isPending={isPending}
                  onSubmit={onSubmit}
                />
                <OffersList
                  offers={offers || []}
                  offersCount={0}
                  isError={isError}
                  isRefetching={isRefetching}
                />
              </div>
            </div>
          </section>
        </div>
      </form>
    </Form>
  );
};
