import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { ContactForm } from './components/contact-form/contact-form';
import { ContactInfo } from './components/contact-info/contact-info';
import { MapComponent } from './components/google-map/google-map';
import { Team } from './components/team/team';

export const Contact = () => {
  const t = useTranslations('contact');
  return (
    <Container className="pt-10 pb-20">
      <h1 className="text-center pb-20">{t('contact')}</h1>
      <div className="flex flex-col md:flex-row h-full gap-10">
        <div className="flex-1">
          <ContactForm />
        </div>
        <div className="flex-1 flex flex-col gap-10">
          <div className="space-y-2.5">
            <h3>{t('contactInvitation')}</h3>
            <p>{t('contactInvitationDesc')}</p>
          </div>
          <ContactInfo />
          <Team />
        </div>
      </div>
      <div className="py-10 h-96 md:mb-0 md:h-96">
        <MapComponent />
      </div>
    </Container>
  );
};
