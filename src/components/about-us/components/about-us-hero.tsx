import { useTranslations } from 'next-intl';

import { QuoteSection } from '@/components/commons/quote-section';

const quote = ` Dzięki niepowtarzalnym kompetencjom i potencjałowi poszczególnych pracowników możemy dla Ciebie świadczyć usługi, które nie mają sobie równych na rynku.`;

export const AboutUsHero = () => {
  const t = useTranslations('aboutUs');
  return (
    <div>
      <h1 className="text-center pb-20">{t('title')}</h1>
      <QuoteSection quote={quote} />
    </div>
  );
};
