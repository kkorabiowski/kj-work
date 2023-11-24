'use client';

import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { Form } from '@/components/ui/form';

import { DesktopFilters } from './components/list/filters/desktop-filters/desktop-filters';
import { ResultsBar } from './components/list/filters/results-bar';
import { SearchPanel } from './components/list/filters/search-panel';
import { OffersList } from './components/list/offers-list';
import { useOffers } from './offers.controller';

export const Offers = () => {
  const t = useTranslations('offers');
  const { form, width, offers, isError, isPending, isRefetching, onSubmit } =
    useOffers();

  return (
    <Container className="mt-10">
      <div className="bg-text-muted space-y-2">
        <h1 className="text-primary text-center">
          {t('findYourOfferHeadline')}
          <span className="text-accent">&nbsp;{t('apply')}</span>
        </h1>
        <p className="text-muted-foreground text-center">
          {t('findYourOfferDesc')}
        </p>
      </div>
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
                    results={offers?.count || '0'}
                    isPending={isPending}
                    onSubmit={onSubmit}
                  />
                  <OffersList
                    offers={offers?.offers}
                    offersCount={offers?.count || 0}
                    isError={isError}
                    isRefetching={isRefetching}
                  />
                </div>
              </div>
            </section>
          </div>
        </form>
      </Form>
    </Container>
  );
};
