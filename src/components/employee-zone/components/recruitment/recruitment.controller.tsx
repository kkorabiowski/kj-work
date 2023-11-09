import { useTranslations } from 'next-intl';

export const useRecruitment = () => {
  const t = useTranslations('employeeZone.recruitment');
  const steps = [
    {
      step_number: 1,
      headline: t('step1.headline'),
      description: t('step1.description'),
    },
    {
      step_number: 2,
      headline: t('step2.headline'),
      description: t('step2.description'),
    },
    {
      step_number: 3,
      headline: t('step3.headline'),
      description: t('step3.description'),
    },
    {
      step_number: 4,
      headline: t('step4.headline'),
      description: t('step4.description'),
    },
    {
      step_number: 5,
      headline: t('step5.headline'),
      description: t('step5.description'),
    },
  ];

  return { steps };
};
