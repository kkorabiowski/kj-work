import { useTranslations } from 'next-intl';

export const useEmployerProfits = () => {
  const t = useTranslations('employerZone.list');
  const pros = {
    label: t('pros.label'),
    profits: [
      t('pros.proffessionals'),
      t('pros.shortTime'),
      t('pros.value'),
      t('pros.improvement'),
    ],
  };

  const industries = {
    label: t('industries.label'),
    profits: [
      t('industries.moto'),
      t('industries.production'),
      t('industries.help'),
      t('industries.crafting'),
    ],
  };
  return { pros, industries };
};
