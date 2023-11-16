import { useOffersQuery } from '@/hooks/queries/use-offers-query';

import { Skeleton } from '@/components/commons/skeleton';
import { Button } from '@/components/ui/button';

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
  const { data, error } = useOffersQuery();

  if (error) {
    return <h1>Coś poszło nie tak...</h1>;
  }

  return (
    <section>
      <div className="space-y-2.5">
        {data?.offers ? (
          data?.offers?.map((offer: Offer) => (
            <OfferItem key={offer.id} {...offer} />
          ))
        ) : (
          <div className="space-y-2.5 mt-10">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-20" />
            <Skeleton className="w-full h-20" />
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-2.5 py-5">
        <Button variant="accent" size="sm">
          1
        </Button>
        <Button variant="accent" size="sm">
          2
        </Button>
        <Button variant="accent" size="sm">
          3
        </Button>
      </div>
    </section>
  );
};
