import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/icon/icon';

export const GeneralInfo = () => {
  const t = useTranslations('employerZone');

  return (
    <div className="py-10 md:py-20 space-y-20">
      <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-5">
        <div className="flex-1 space-y-5">
          <h2>{t('forEmployers')}</h2>
          <p>{t('forEmployersDesc')}</p>
        </div>
        <div className="flex-1">
          <Icon name="undraw-solution" className="mx-auto w-3/4 md:w-1/2" />
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-5">
        <div className="flex-1 space-y-5">
          <h2>{t('whyBroker')}</h2>
          <div className="space-y-2.5">
            <p>
              <strong>{t('ourPriority')}</strong>
            </p>
            <p>{t('lookForMessage')}</p>
            <p>{t('qualifiedWorkers')}</p>
          </div>
        </div>
        <div className="flex-1">
          <Icon name="undraw-hunt" className="mx-auto w-3/4 md:w-1/2" />
        </div>
      </section>
    </div>
  );
};
