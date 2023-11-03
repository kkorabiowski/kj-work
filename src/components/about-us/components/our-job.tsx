import { useTranslations } from 'next-intl';

import { ProfitList } from '@/components/employee-zone/components/profits/components/profit-list';

export const OurJob = () => {
  const t = useTranslations('aboutUs');

  const ourJob = {
    label: t('whatWeDoLabel'),
    profits: [
      t('leasing'),
      t('recruitment'),
      t('temporaryWork'),
      t('training'),
    ],
  };

  return (
    <section className="flex flex-col md:flex-row md:items-center gap-5 py-10 md:py-20">
      <div className="flex-1 space-y-5">
        <ProfitList {...ourJob} />
      </div>
      <div className="flex-1 space-y-5">
        <h2>{t('howWeWorkLabel')}</h2>
        <p>{t('howWeWorkDesc')}</p>
      </div>
    </section>
  );
};
