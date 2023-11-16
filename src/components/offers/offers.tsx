'use client';

import { useTranslations } from 'next-intl';

import { useWindowSize } from '@/hooks/use-window-size';

import { Container } from '@/components/commons/container';

import { OffersFilterBar } from './components/offers-filter-bar';
import { OffersFilters } from './components/offers-filters';
import { OffersListing } from './components/offers-listing';
import { SearchPanel } from './components/search-panel';
import { useOffers } from './offers.controller';
import { Form } from '../ui/form';

// TODO: MENU DYNAMIC IMPORT

export const Offers = () => {
  const t = useTranslations('offers');
  const size = useWindowSize();
  const { form, onSubmit } = useOffers();

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
          <SearchPanel form={form} />
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
        </form>
      </Form>
    </Container>
  );
};
