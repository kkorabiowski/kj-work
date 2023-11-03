import { useTranslations } from 'next-intl';

import { Icon } from '@/components/commons/icon/icon';

export const Specialization = () => {
  const t = useTranslations('home.specialization');
  return (
    <section className="flex flex-col-reverse md:flex-row-reverse items-center gap-10 md:gap-5 py-10 md:py-20">
      <div className="flex-1 space-y-5">
        <h2>{t('headline')}</h2>
        <div>
          <h4>{t('temporaryWorkLabel')}</h4>
          <p>{t('temporaryWorkDesc')}</p>
        </div>
        <div>
          <h4>{t('temporaryWorkLabel')}</h4>
          <p>{t('temporaryWorkDesc')}</p>
        </div>
        <div>
          <h4>{t('managerPositionLabel')}</h4>
          <p>{t('managerPositionDesc')}</p>
        </div>
        <div>
          <h4>{t('careerPathLabel')}</h4>
          <p>{t('careerPathDesc')}</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <Icon className="w-5/6 md:w-4/6" name="users-per-minute" />
      </div>
    </section>
  );
};
