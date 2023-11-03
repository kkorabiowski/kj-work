import { Container } from '@/components/commons/container';

import { ProfitList } from './components/profit-list';

const pros = {
  label: 'PRACOWNIKOM GWARANTUJEMY',
  profits: [
    'Niemiecką umowę',
    'Bezpieczeństwo zatrudnienia',
    'Wysokie zarobki',
    'Atrakcyjne oferty pracy',
    'Elastyczne godziny pracy',
    'Doradztwo zawodowe',
  ],
};

const employees = {
  label: 'NASI PRACOWNICY DOCENIAJĄ',
  profits: [
    'Stałe wsparcie naszej firmy',
    'Szeroką baza ofert pracy',
    'Profesjonalną koordynację naszych działań',
    'Wysoką jakość naszych usług, które ciągle poszerzamy',
  ],
};

export const Profits = () => {
  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">
            Co dzięki nam zyskasz?
          </h1>
        </Container>
      </div>
      <Container>
        <div className="py-20 flex-col md:flex-row flex gap-10">
          <ProfitList {...pros} />
          <ProfitList {...employees} />
        </div>
      </Container>
    </section>
  );
};
