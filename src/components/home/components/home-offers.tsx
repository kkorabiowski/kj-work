'use client';
import { Container } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { useHomeOffersQuery } from '@/hooks/queries/use-home-offers-query';

import { Offer } from '@/components/offers/components/list/offers-list';
import { OfferListItem } from '@/components/offers/components/list/offers-list-item';
import { OffersListSkeleton } from '@/components/offers/components/list/offers-list-skeleton';
import { Button } from '@/components/ui/button';

import { Link } from '@/navigation';

export const HomeOffers = () => {
  const t = useTranslations('home.offers');
  const { data, error } = useHomeOffersQuery();

  if (error) {
    return (
      <Container>
        <h1>{t('error')}</h1>
      </Container>
    );
  }

  return (
    <section className="space-y-5 py-20" data-test="home-offers">
      <h2>{t('headline')}</h2>
      {data ? (
        <div>
          <div className="space-y-2.5">
            {data?.offers
              ?.slice(0, 3)
              ?.map((offer: Offer) => (
                <OfferListItem key={offer.id} {...offer} />
              ))}
          </div>
          <div className="flex items-center justify-end pt-10">
            <Link href="/oferty-pracy">
              <Button variant="link">{t('seeAll')}</Button>
            </Link>
          </div>
        </div>
      ) : (
        <OffersListSkeleton />
      )}
    </section>
  );
};
