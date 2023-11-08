'use client';

import { useOfferQuery } from '@/hooks/queries/use-offer-query';

import { Container } from '@/components/commons/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { ApplyForm } from './components/apply-form/apply-form';
import { OfferContentList } from './components/offer-content-list';
import { OfferHeader } from './components/offer-header';
import { Skeleton } from '../commons/skeleton';

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
  const { data, error, isLoading } = useOfferQuery(id);
  const offer: TOffer = data?.offer;

  if (error) {
    return (
      <Container>
        <h1>Error..</h1>
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
                  <h2>Opis stanowiska</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5">
                    <p>{offer.description}</p>
                    {offer.duties ? (
                      <OfferContentList label="Obowiązki" list={offer.duties} />
                    ) : null}
                    {offer.requirements ? (
                      <OfferContentList
                        label="Wymagania"
                        list={offer.requirements}
                      />
                    ) : null}
                    {offer.offer ? (
                      <OfferContentList label="Oferta" list={offer.offer} />
                    ) : null}
                    <p>{offer.summary}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex-1 md:w-5/12 space-y-5">
              <ApplyForm />
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
