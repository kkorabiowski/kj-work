import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { QuoteSection } from '@/components/commons/quote-section';

import { Profits } from './components/profits/profits';
import { Recruitment } from './components/recruitment/recruitment';
import { WelcomeMessage } from './components/welcome-message';

export const EmployeeZone = () => {
  const t = useTranslations('employeeZone');
  return (
    <>
      <Container>
        <h1 className="text-center pt-10 pb-20">{t('title')}</h1>
        <QuoteSection quote={t('quote')} />
        <WelcomeMessage />
      </Container>
      <Profits />
      <Recruitment />
    </>
  );
};
