import { Briefcase, Clock4, MapPin, ScrollText } from 'lucide-react';

import { Breadcrumbs } from '@/components/commons/breadcrumbs';
import { Container } from '@/components/container';
import { Input } from '@/components/ui/input';

type Props = {
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
};

export const Offer = ({
  agreement_type,
  category,
  company,
  location,
  title,
  expiration_date,
}: Props) => {
  return (
    <Container className="pt-10 pb-20">
      <div>
        <Breadcrumbs />
        <div className="pt-5 pb-10">
          <h1>{title}</h1>
          <h5 className="text-muted-foreground">{company?.name}</h5>
        </div>
        <div className="grid grid-cols-4 gap-10">
          <div className="p-5 bg-primary rounded-md flex items-center gap-4 justify-center">
            <Briefcase
              size={32}
              className="inline-block text-primary-foreground"
            />
            <div>
              <p className="text-primary-foreground/50">Branża</p>
              <p className="text-primary-foreground">{category}</p>
            </div>
          </div>
          <div className="p-5 bg-primary rounded-md flex items-center gap-4 justify-center">
            <ScrollText
              size={32}
              className="inline-block text-primary-foreground"
            />
            <div>
              <p className="text-primary-foreground/50">Typ umowy</p>
              <p className="text-primary-foreground">{agreement_type}</p>
            </div>
          </div>
          <div className="p-5 bg-primary rounded-md flex items-center gap-4 justify-center">
            <MapPin
              size={32}
              className="inline-block text-primary-foreground"
            />
            <div>
              <p className="text-primary-foreground/50">Lokalizacja</p>
              <p className="text-primary-foreground">{location}</p>
            </div>
          </div>
          <div className="p-5 bg-primary rounded-md flex items-center gap-4 justify-center">
            <Clock4
              size={32}
              className="inline-block text-primary-foreground"
            />
            <div>
              <p className="text-primary-foreground/50">Ważna do</p>
              <p className="text-primary-foreground">{expiration_date}</p>
            </div>
          </div>
        </div>
        <section className="flex gap-10 pt-10 pb-20">
          <div className="w-1/2 space-y-5">
            <h2>Opis stanowiska</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              consequuntur est minima, repellendus nobis vel ipsa enim dolorum
              inventore ratione iste quod. Voluptates necessitatibus nostrum vel
              magni delectus incidunt consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              consequuntur est minima, repellendus nobis vel ipsa enim dolorum
              inventore ratione iste quod. Voluptates necessitatibus nostrum vel
              magni delectus incidunt consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
              consequuntur est minima, repellendus nobis vel ipsa enim dolorum
              inventore ratione iste quod. Voluptates necessitatibus nostrum vel
              magni delectus incidunt consectetur.
            </p>
          </div>
          <div className="w-1/2 space-y-5">
            <h2>Formularz kontaktowy</h2>
            <p>
              Podoba Ci się ta oferta? Wypełnij poniższy formularzy, nasz zespół
              się z Tobą skontaktuje
            </p>
            <div>
              <Input placeholder="Twoję imię" />
              <Input placeholder="Twój adres email" />
              <Input placeholder="Numer telefonu" />
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};
