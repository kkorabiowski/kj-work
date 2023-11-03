import { ProfitList } from '@/components/employee-zone/components/profits/components/profit-list';

const ourJob = {
  label: 'Czym się zajmujemy?',
  profits: [
    'Leasing pracowniczy',
    'Rekrutacja stała',
    'Praca tymczasowa',
    'Szkolenia',
  ],
};

export const OurJob = () => {
  return (
    <section className="flex items-center gap-5 py-20">
      <div className="flex-1 space-y-5">
        <ProfitList {...ourJob} />
      </div>
      <div className="flex-1 space-y-5">
        <h2>Jak Pracujemy?</h2>
        <p>
          Stosujemy najnowsze i sprawdzone metody w poszukiwaniu najlepszych
          pracowników. Koncentrujemy się na łączeniu właściwych ludzi z właściwą
          pracą. Nasz zespół składa się m.in. z psychologów, którzy weryfikują
          kompetencje kandydatów przy pomocy stworzonych do tego celu narzędzi i
          technik psychologicznych oraz headhunterskich. Kandydatów na
          stanowiska wyższego szczebla weryfikujemy wielopoziomowo, co daje
          gwarancję niezawodności.
        </p>
      </div>
    </section>
  );
};
