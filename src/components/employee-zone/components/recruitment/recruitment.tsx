import { Container } from '@/components/commons/container';

import { RecruitmentStep } from './components/recruitment-step';

const steps = [
  {
    step_number: 1,
    headline: 'Wypełnij formularz aplikujący na stronie danej oferty',
    description: `Jeśli chcesz ubiegać się o pracę za granicą korzystając z pośrednictwa naszej agencji - już dziś prześlij dokumenty drogą mailową lub wygodnie zaaplikuj przez nasz system HR. Będziemy potrzebować CV w języku polskim lub w języku niemieckim oraz świadectwa pracy / referencje potwierdzające wymagane kwalifikacje.`,
  },
  {
    step_number: 2,
    headline: 'Skontaktujemy się z Tobą',
    description: `W przeciągu kilku dni skontaktuje się z Tobą nasz rekruter i przeprowadzi pierwszą rozmowę - zweryfikuje dane zawarte w CV, wypyta o interesujące Cię oferty pracy, odpowie na Twoje pytania. Będziesz mógł poznać szczegóły dotyczące naszych ofert pracy.`,
  },
  {
    step_number: 3,
    headline: 'Wyślemy Twoje CV dla pracodawcy',
    description: `W kolejnym etapie Twoje CV zostanie wysłane do pracodawcy.`,
  },
  {
    step_number: 4,
    headline: 'Umówimy Cię na rozmowę rekrutacyjną',
    description: `Jeśli pracodawca będzie zainteresowany Twoją kandydaturą - umówimy Cię na rozmowę rekrutacyjną w języku niemieckim. Rozmowa odbędzie się przez telefon lub komunikator internetowy.`,
  },
  {
    step_number: 5,
    headline: 'Podpisujemy umowę i zaczynasz pracę',
    description: `Jeśli zarówno Ty jak i pracodawca będziecie zainteresowani współpracą - podpisujemy umowę i zaczynasz pracę!`,
  },
];

export const Recruitment = () => {
  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">
            Jak przebiega proces rekrutacji?
          </h1>
        </Container>
      </div>
      <Container className="py-20 space-y-14">
        {steps.map(step => (
          <RecruitmentStep key={step.step_number} {...step} />
        ))}
      </Container>
    </section>
  );
};
