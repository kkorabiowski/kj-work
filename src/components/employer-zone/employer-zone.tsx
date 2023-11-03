import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { EmployerProfits } from './components/employer-profits';
import { EmploymentProcess } from './components/employment-process';
import { GeneralInfo } from './components/general-info';
import { QuoteSection } from '../commons/quote-section';

const quote = `"Pracodawca, który inwestuje w ludzi, jest kluczem do sukcesu. Troszczy się o rozwój swoich pracowników, daje im okazję do nauki i rozwoju oraz stwarza warunki do osiągnięcia pełnego potencjału." - Richard Branson`;

export const EmployerZone = () => {
  const t = useTranslations('employerZone');
  return (
    <>
      <Container>
        <h1 className="text-center pt-10 pb-20">{t('title')}</h1>
        <QuoteSection quote={quote} />
        <GeneralInfo />
      </Container>
      <EmployerProfits />
      <EmploymentProcess />
    </>
  );
};
