import { Container } from '@/components/commons/container';
import { RecruitmentStep } from '@/components/employee-zone/components/recruitment/components/recruitment-step';

const steps = [
  {
    step_number: 1,
    headline: 'Spotkanie informacyjne',
    description: `Pierwszy krok to spotkanie informacyjne, które może odbyć się w naszej siedzibie lub online. Na tym spotkaniu omawiamy Państwa potrzeby i wymagania związane z zatrudnieniem specjalistów.`,
  },
  {
    step_number: 2,
    headline: 'Przeszukanie bazy Kandydatów',
    description: `Następnie nasz rekruter specjalizujący się w danej dziedzinie przystępuje do przeszukiwania bazy kandydatów, aby zaproponować Państwu najlepsze rozwiązania. Dysponujemy własnymi bazami pracowników, co pozwala nam świadczyć usługi na najwyższym poziomie.`,
  },
  {
    step_number: 3,
    headline: 'Wybór Kandydata',
    description: `Po znalezieniu odpowiedniego kandydata, zatrudniamy go na określonych warunkach. Po każdym okresie pracy wystawiamy Państwu fakturę, aby wszystko było transparentne i zgodne z umową.`,
  },
  {
    step_number: 4,
    headline: 'Dbamy o zadowolenie Pracodawcy i Pracownika',
    description: `Jesteśmy w stałym kontakcie zarówno z Pracodawcą, jak i Pracownikiem, dbając o jakość świadczonych usług. Cenne informacje zwrotne od Państwa są dla nas niezwykle istotne, ponieważ pomagają nam ciągle doskonalić nasze usługi.`,
  },
];

export const EmploymentProcess = () => {
  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">
            Jak wygląda proces zatrudnienia pracownika?
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
