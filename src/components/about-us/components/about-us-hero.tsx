import { useTranslations } from 'next-intl';

import { QuoteSection } from '@/components/commons/quote-section';

export const AboutUsHero = () => {
  const t = useTranslations('aboutUs');
  return (
    <div>
      <h1 className="text-center pb-20">{t('title')}</h1>
      <QuoteSection quote={t('quote')} />
    </div>
  );
};
