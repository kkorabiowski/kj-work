import Link from 'next/link';

import { OfferItem } from '@/components/offers/components/offer-item';
import { offers } from '@/components/offers/components/offers-listing';
import { Button } from '@/components/ui/button';

export const HomeOffers = () => {
  return (
    <section className="space-y-5 py-20">
      <h2>Sprawdź nasze najnowsze oferty</h2>
      <div>
        <div className="space-y-2.5">
          {offers.slice(0, 3).map(offerItem => (
            <OfferItem key={offerItem.id} {...offerItem} />
          ))}
        </div>
        <div className="flex items-center justify-end pt-10">
          <Link href="/oferty-pracy">
            <Button variant="link">Zobacz wszystkie</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
