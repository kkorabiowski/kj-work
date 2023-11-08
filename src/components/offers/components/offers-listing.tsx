import { useOffersQuery } from '@/hooks/queries/use-offers-query';

import { Skeleton } from '@/components/commons/skeleton';

import { OfferItem } from './offer-item';

export type Offer = {
  id: string;
  title: string;
  company: {
    name: string;
    picture: string;
  };
  agreement_type: string;
  location: string;
  category: string;
  created_at?: string;
};

export const OffersListing = () => {
  const { data, error, isLoading } = useOffersQuery();

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
    <div className="space-y-2.5">
      {data?.offers?.map((offer: Offer) => (
        <OfferItem key={offer.id} {...offer} />
      ))}
    </div>
  );
};
