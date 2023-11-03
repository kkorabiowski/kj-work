import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/icon/icon';

export const WelcomeMessage = () => {
  const t = useTranslations('employeeZone');
  return (
    <div className="space-y-5 py-10 md:py-20">
      <section className="flex flex-col-reverse md:flex-row gap-10 md:gap-2.5 items-center pt-10 md:pt-20 pb-10">
        <div className="flex-1 space-y-2.5">
          <h2>{t('rightPlace')}</h2>
          <p>{t('rightPlaceDesc')}</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Icon name="undraw-check" className="w-16" />
        </div>
      </section>
      <section className="flex flex-col-reverse md:flex-row-reverse gap-10 md:gap-2.5 items-center pt-10 md:pt-20 pb-10">
        <div className="flex-1 space-y-2.5">
          <h2>{t('weLiekYou')}</h2>
          <p>{t('weLikeYouDesc')}</p>
          <strong>{t('helpMessage')}</strong>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Icon name="smiley-face" className="w-16" />
        </div>
      </section>
    </div>
  );
};
