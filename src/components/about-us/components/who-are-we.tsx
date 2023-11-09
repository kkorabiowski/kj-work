import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/icon/icon';

export const WhoAreWe = () => {
  const t = useTranslations('home');
  return (
    <section className="flex flex-col-reverse gap-10 md:flex-row items-center md:gap-5 py-10 md:py-20">
      <div className="flex-1 space-y-5">
        <h2>{t('whoAreWe')}</h2>
        <h5>{t('whoAreWeDesc')}</h5>
      </div>
      <div className="flex-1 flex justify-center">
        {/* <Icon className="w-3/4 md:w-4/6" name="logo-cropped-ext" /> */}
        <Icon className="w-3/4 md:w-4/6" name="logo-cropped-ext" />
      </div>
    </section>
  );
};
