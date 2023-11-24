import { useFormContext } from 'react-hook-form';

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
  offersCount?: number;
  isError?: boolean;
  isRefetching?: boolean;
};

export const OffersList = ({
  offers,
  offersCount = 0,
  isError,
  isRefetching,
}: Props) => {
  const form = useFormContext();
  const values = form.getValues();

  if (isError || offers?.length === 0) {
    return (
      <p className="text-center mt-5">
        Brak wyników wyszukiania dla frazy:
        <strong>{values.query}</strong>
      </p>
    );
  }

  if (isRefetching) {
    return (
      <div className="space-y-2.5">
        {' '}
        <OffersListSkeleton />
      </div>
    );
  }

  return (
    <section className="offers-list">
      <div className="space-y-2.5">
        {offers ? (
          offers.map((offer: Offer) => (
            <OfferListItem key={offer.id} {...offer} />
          ))
        ) : (
          <OffersListSkeleton />
        )}
      </div>
      <Pagination current={values.page} total={offersCount} />
    </section>
  );
};
