'use client';

import { Container } from '@/components/commons/container';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { ApplyForm } from './components/apply-form/apply-form';
import { OfferContentList } from './components/offer-content-list';
import { OfferHeader } from './components/offer-header';

export type TOffer = {
  content?: {
    description: string;
    requirements?: string[];
    duties?: string[];
    offer?: string[];
    summary?: string[];
  };
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

const duties = {
  label: 'Obowiązki',
  list: [
    'Wykonywanie prac budowlanych zgodnie z projektem i instrukcjami przełożonych.',
    'Przygotowywanie miejsc budowy, w tym wykopów, fundamentów, konstrukcji itp.',
    'Montaż i demontaż rusztowań oraz innych narzędzi i urządzeń budowlanych.',
  ],
};

const requirements = {
  label: 'Wymagania',
  list: [
    'Wykonywanie prac budowlanych zgodnie z projektem i instrukcjami przełożonych.',
    'Przygotowywanie miejsc budowy, w tym wykopów, fundamentów, konstrukcji itp.',
    'Montaż i demontaż rusztowań oraz innych narzędzi i urządzeń budowlanych.',
  ],
};

const offer = {
  label: 'Oferujemy',
  list: [
    'Wykonywanie prac budowlanych zgodnie z projektem i instrukcjami przełożonych.',
    'Przygotowywanie miejsc budowy, w tym wykopów, fundamentów, konstrukcji itp.',
    'Montaż i demontaż rusztowań oraz innych narzędzi i urządzeń budowlanych.',
  ],
};

const summary = `Jeśli jesteś doświadczonym budowlańcem i spełniasz powyższe wymagania, zachęcamy do przesłania swojego CV i listu motywacyjnego na adres [adres e-mail] lub skontaktowania się z nami telefonicznie pod numerem [numer telefonu].`;

export const Offer = ({ content, ...rest }: TOffer) => {
  return (
    <Container className="pt-10 pb-20">
      <div>
        <OfferHeader {...rest} />
        <section className="flex flex-col md:flex-row gap-10 pt-10 pb-10 md:pb-20">
          <div className="flex-1 md:w-7/12 space-y-5">
            <Card>
              <CardHeader>
                <h2>Opis stanowiska</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  <p>
                    Poszukujemy doświadczonego budowlańca, który będzie
                    odpowiedzialny za różne zadania związane z budową i
                    remontem. Nasza firma specjalizuje się w projektach
                    budowlanych, od mniejszych remontów po większe budowy.
                    Oczekujemy od kandydata, że będzie w stanie pracować zarówno
                    samodzielnie, jak i w zespole, dostosowując się do różnych
                    projektów.
                  </p>
                  {duties ? <OfferContentList {...duties} /> : null}
                  {requirements ? <OfferContentList {...requirements} /> : null}
                  {offer ? <OfferContentList {...offer} /> : null}
                  {summary ? <p>{summary}</p> : null}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex-1 md:w-5/12 space-y-5">
            <ApplyForm />
          </div>
        </section>
      </div>
    </Container>
  );
};
