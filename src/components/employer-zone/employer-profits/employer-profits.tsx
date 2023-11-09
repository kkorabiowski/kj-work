import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { ProfitList } from '@/components/employee-zone/components/profits/components/profit-list';

import { useEmployerProfits } from './employer-profits.controller';

export const EmployerProfits = () => {
  const t = useTranslations('employerZone');
  const { industries, pros } = useEmployerProfits();
  return (
    <section>
      <div className="bg-accent py-16">
        <Container>
          <h1 className="text-accent-foreground text-center">{t('profits')}</h1>
        </Container>
      </div>
      <Container>
        <div className="py-20 flex flex-col md:flex-row gap-10">
          <ProfitList {...pros} />
          <ProfitList {...industries} />
        </div>
      </Container>
    </section>
  );
};
