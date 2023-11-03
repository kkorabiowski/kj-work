'use client';
import { Briefcase, Clock4, MapPin, ScrollText } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Breadcrumbs } from '@/components/commons/breadcrumbs';
import { TOffer } from '@/components/offer/offer';

import { OfferHeaderItem } from './offer-header-item';

type Props = Pick<
  TOffer,
  | 'title'
  | 'category'
  | 'company'
  | 'agreement_type'
  | 'location'
  | 'expiration_date'
>;

export const OfferHeader = ({
  agreement_type,
  category,
  company,
  location,
  title,
  expiration_date,
}: Props) => {
  const t = useTranslations('offer.header');
  return (
    <div>
      <Breadcrumbs />
      <div className="pt-5 pb-10">
        <h1>{title}</h1>
        <h5 className="text-muted-foreground">{company?.name}</h5>
      </div>
      <div className="grid gap-5 md:grid-cols-4 md:gap-10">
        <OfferHeaderItem
          {...{ category, name: t('industry'), icon: Briefcase }}
        />
        <OfferHeaderItem
          {...{
            category: agreement_type,
            name: t('agreement_type'),
            icon: ScrollText,
          }}
        />
        <OfferHeaderItem
          {...{ category: location, name: t('location'), icon: MapPin }}
        />
        <OfferHeaderItem
          {...{
            category: expiration_date,
            name: t('expiration_date'),
            icon: Clock4,
          }}
        />
      </div>
    </div>
  );
};
