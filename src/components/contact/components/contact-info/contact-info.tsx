import { useTranslations } from 'next-intl';

import { ContactInfoItem } from './components/contact-info-item';

export const ContactInfo = () => {
  const t = useTranslations('contact.info')
  return (
    <section className="space-y-2.5">
      <div>
        <h3>KJ WORK GROUP</h3>
      </div>
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 justify-evenly">
        <ContactInfoItem
          headquarters={t('polandHeadquarters')}
          email="kontakt@kjworkgroup.com"
          phone="+48788788788"
          address={{
            city: 'Gorzów Wlkp.',
            postal_code: '66-400',
            street: 'ul. Łokietka 32-33, lokal 47',
          }}
        />
        <ContactInfoItem
          headquarters={t('germanyHeadquarters')}
          email="kontakt@kjworkgroup.com"
          phone="+48788788788"
          address={{
            city: 'Berlin',
            postal_code: '133507',
            street: 'Am Tegeler Hafen 3A',
          }}
        />
      </div>
    </section>
  );
};
