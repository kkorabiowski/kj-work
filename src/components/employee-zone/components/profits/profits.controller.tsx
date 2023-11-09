import { useTranslations } from 'next-intl';

export const useProfits = () => {
  const t = useTranslations('employeeZone.profits');

  const pros = {
    label: t('profitsHeadline'),
    profits: [
      t('pros.germanAgreement'),
      t('pros.employmentSecurity'),
      t('pros.salary'),
      t('pros.attractiveOffers'),
      t('pros.hours'),
      t('pros.support'),
    ],
  };

  const employees = {
    label: t('employees.label'),
    profits: [
      t('employees.support'),
      t('employees.offers'),
      t('employees.coordination'),
      t('employees.quality'),
    ],
  };

  return {
    pros,
    employees,
  };
};
