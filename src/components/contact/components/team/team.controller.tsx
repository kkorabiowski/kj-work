import { useTranslations } from 'next-intl';

export const useTeam = () => {
  const t = useTranslations('contact.team');
  const members = [
    {
      full_name: 'Hubert Jacek',
      position: t('position.ceo'),
      email: 'h.jacek@kjworkgroup.pl',
      phone: '+48789789789',
    },
    {
      full_name: 'Jan Kowalski',
      position: t('position.ceo'),
      email: 'j.kowalski@kjworkgroup.pl',
      phone: '+48789789789',
    },
    {
      full_name: 'Anna Kowalska',
      position: t('position.ceo'),
      email: 'anna.kowalska@kjworkgroup.pl',
      phone: '+48789789789',
    },
  ];

  return { t, members };
};
