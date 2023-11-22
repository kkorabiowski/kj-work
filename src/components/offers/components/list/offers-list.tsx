import { Pagination } from '@/components/commons/pagination/pagination';

import { OfferListItem } from './offers-list-item';
import { OffersListSkeleton } from './offers-list-skeleton';

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

type Props = {
  offers: Offer[];
  isError?: boolean;
};

export const OffersList = ({ offers, isError }: Props) => {
  if (isError || offers?.length === 0) {
    return <p>Brak wyników wyszukiania</p>;
  }

  return (
    <section>
      <div className="space-y-2.5">
        {offers ? (
          offers.map((offer: Offer) => (
            <OfferListItem key={offer.id} {...offer} />
          ))
        ) : (
          <OffersListSkeleton />
        )}
      </div>
      <Pagination />
    </section>
  );
};
