import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { ProfitList } from './components/profit-list';
import { useProfits } from './profits.controller';

export const Profits = () => {
  const t = useTranslations('employeeZone.profits');
  const { employees, pros } = useProfits();
  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">
            {t('profitsHeadline')}
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
