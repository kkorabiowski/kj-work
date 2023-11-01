import { Briefcase, Clock4, MapPin, ScrollText } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

type Props = {
  id: string;
  title: string;
  company: {
    name: string;
    picture: string;
  };
  agreement_type: string;
  location: string;
  category?: string;
  created_at?: Date;
};

export const OfferItem = ({
  title,
  agreement_type,
  company,
  id,
  location,
  category,
  created_at,
}: Props) => {
  return (
    <Card>
      <div className="flex justify-between items-center gap-5 p-2.5">
        <div className="flex items-center gap-5">
          <div>
            <Avatar className="w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback></AvatarFallback>
            </Avatar>
          </div>
          <div>
            <Link href={`/oferty-pracy/${id}`}>
              <h3>{title}</h3>
            </Link>
            <div className="flex gap-2.5 items-center">
              <p className="text-muted-foreground">{company.name}</p>
              <div className="flex items-center gap-1.5">
                <ScrollText className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">{agreement_type}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">{location}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock4 className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">
                  Dodano: {created_at?.toDateString()}
                </p>
              </div>
            </div>
            {category ? (
              <div className="flex items-center gap-1.5">
                <Briefcase className="inline-block w-3 h-3" />
                <p className="text-muted-foreground">{category}</p>
              </div>
            ) : null}
          </div>
        </div>
        <Link href={`/oferty-pracy/${id}`}>
          <Button>Zaaplikuj</Button>
        </Link>
      </div>
    </Card>
  );
};
