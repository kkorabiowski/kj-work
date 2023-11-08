'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useOffersQuery } from '@/hooks/queries/use-offers-query';

import { Skeleton } from '@/components/commons/skeleton';
import { OfferItem } from '@/components/offers/components/offer-item';
import { Offer } from '@/components/offers/components/offers-listing';
import { Button } from '@/components/ui/button';

export const HomeOffers = () => {
  const t = useTranslations('home.offers');
  const { data, isLoading, error } = useOffersQuery();

  if (error) {
    return <h1>Coś poszło nie tak...</h1>;
  }

  if (isLoading) {
    return (
      <div className="space-y-2.5 mt-10">
        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-20" />
        <Skeleton className="w-full h-20" />
      </div>
    );
  }

  return (
    <section className="space-y-5 py-20">
      <h2>{t('headline')}</h2>
      <div>
        <div className="space-y-2.5">
          {data?.offers
            ?.slice(0, 3)
            ?.map((offer: Offer) => <OfferItem key={offer.id} {...offer} />)}
        </div>
        <div className="flex items-center justify-end pt-10">
          <Link href="/oferty-pracy">
            <Button variant="link">{t('seeAll')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
