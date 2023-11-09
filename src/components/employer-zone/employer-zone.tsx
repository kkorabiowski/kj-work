import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { QuoteSection } from '@/components/commons/quote-section';

import { EmploymentProcess } from './components/employment-process';
import { GeneralInfo } from './components/general-info';
import { EmployerProfits } from './employer-profits/employer-profits';

export const EmployerZone = () => {
  const t = useTranslations('employerZone');
  return (
    <>
      <Container>
        <h1 className="text-center pt-10 pb-20">{t('title')}</h1>
        <QuoteSection quote={t('quote')} />
        <GeneralInfo />
      </Container>
      <EmployerProfits />
      <EmploymentProcess />
    </>
  );
};
