import {
  Briefcase,
  ChevronRightCircle,
  Clock4,
  MapPin,
  ScrollText,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import {
  getAgreementName,
  getIndustryName,
  Industry,
  TAgreementType,
} from '@/lib/helpers';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { Link } from '@/navigation';

type Props = {
  id: string;
  title: string;
  company: {
    name: string;
    picture: string;
  };
  agreement_type: string;
  location: string;
  industry?: string;
  created_at?: string;
};

export const OfferListItem = ({
  title,
  agreement_type,
  company,
  id,
  location,
  industry,
  created_at,
}: Props) => {
  const t = useTranslations('offer');
  return (
    <Card data-test="offer-item">
      <div className="flex justify-between items-center gap-5 p-2.5">
        <div className="flex items-center gap-5">
          <div>
            <Avatar className="w-12 h-12 md:w-16 md:h-16 flex items-center bg-accent justify-center">
              <Briefcase className="text-accent-foreground" size={30} />
            </Avatar>
          </div>
          <div>
            <Link href={`/oferty-pracy/${id}`}>
              <h3 className="md:text-xl lg:md:text-2xl">{title}</h3>
            </Link>
            <div className="md:flex hidden md:flex-row flex-col gap-2.5 md:items-center">
              <p className="text-muted-foreground">{company.name}</p>
              <div className="flex items-center gap-1.5">
                <ScrollText className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">
                  {getAgreementName(agreement_type as TAgreementType)}
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">{location}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              {industry ? (
                <div className="flex items-center gap-1.5">
                  <Briefcase className="inline-block w-3 h-3" />
                  <p className="text-sm md:text-base text-muted-foreground">
                    {getIndustryName(industry as Industry)}
                  </p>
                </div>
              ) : null}
              <div className="hidden md:flex items-center gap-1.5">
                <Clock4 className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">
                  {t('added')}: {created_at?.slice(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/oferty-pracy/${id}`}>
          <Button variant="default" className="hidden md:inline-flex">
            {t('check')}
          </Button>
          <Button variant="default" size="icon" className="md:hidden">
            <ChevronRightCircle size={20} />
          </Button>
        </Link>
      </div>
    </Card>
  );
};
