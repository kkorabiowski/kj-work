import { Container } from '@/components/commons/container';
import { ProfitList } from '@/components/employee-zone/components/profits/components/profit-list';

const pros = {
  label: 'Co cenią współpracujący z nami pracodawcy',
  profits: [
    'Szeroką bazę ofert fachowców',
    'Krótki czas wykonania zlecenia',
    'Dysponujemy dużą liczbą wykwalifikowanych specjalistów w wielu dziedzinach',
    'Ciągle się rozwijamy',
  ],
};

const employees = {
  label: 'Branże, w których możemy Ci pomóc',
  profits: [
    'Motoryzacja - kierowca, mechanik, mechatronik, elektryk',
    'Produkcja - operator maszyn, pracownik produkcji',
    'Opieka nad seniorem - opiekun, opiekunka, pielęgniarka',
    'Stanowiska rzemieślnicze - spawacz, ślusarz, lakiernik itp.',
  ],
};

export const EmployerProfits = () => {
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
        <div className="py-20 flex gap-10">
          <ProfitList {...pros} />
          <ProfitList {...employees} />
        </div>
      </Container>
    </section>
  );
};
