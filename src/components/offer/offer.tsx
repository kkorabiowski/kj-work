'use client';

import { useTranslations } from 'next-intl';

import { useOfferQuery } from '@/hooks/queries/use-offer-query';

import { Container } from '@/components/commons/container';
import { Skeleton } from '@/components/commons/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { ApplyForm } from './components/apply-form/apply-form';
import { OfferContentList } from './components/offer-content-list';
import { OfferHeader } from './components/offer-header';

export type TOffer = {
  id: string;
  description: string;
  title: string;
  agreement_type: string;
  location: string;
  category: string;
  created_at: string;
  expiration_date: string;
  company: {
    name: string;
    picture: string;
  };
  requirements?: string[];
  duties?: string[];
  offer?: string[];
  summary?: string[];
};

export const Offer = ({ id }: { id: string }) => {
  const t = useTranslations('offer');
  const { data, error } = useOfferQuery(id);
  const offer: TOffer = data?.offer;

  console.log(error);

  if (error) {
    return (
      <Container className="pt-10 pb-20">
        <h1 className="text-center">Podana oferta nie istnieje</h1>
      </Container>
    );
  }

  return (
    <Container className="pt-10 pb-20">
      {offer ? (
        <div>
          <OfferHeader {...offer} />
          <section className="flex flex-col md:flex-row gap-10 pt-10 pb-10 md:pb-20">
            <div className="flex-1 md:w-7/12 space-y-5">
              <Card>
                <CardHeader>
                  <h2>{t('jobDescription')}</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <p>{offer.description}</p>
                    {offer.duties ? (
                      <OfferContentList
                        label={t('list.duties')}
                        list={offer.duties}
                      />
                    ) : null}
                    {offer.requirements ? (
                      <OfferContentList
                        label={t('list.requirements')}
                        list={offer.requirements}
                      />
                    ) : null}
                    {offer.offer ? (
                      <OfferContentList
                        label={t('list.offer')}
                        list={offer.offer}
                      />
                    ) : null}
                    <p>{offer.summary}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 md:w-5/12 space-y-5">
              <ApplyForm offerId={id} />
            </div>
          </section>
        </div>
      ) : (
        <div className="space-y-5">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
        </div>
      )}
    </Container>
  );
};
