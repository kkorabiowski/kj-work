import { PartyPopper, Slack } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { TrustedUsItem } from './trusted-us-item';

export const TrustedUs = () => {
  const t = useTranslations('aboutUs');

  return (
    <section className="bg-accent py-14 w-full">
      <Container className="space-y-8">
        <h3 className="text-accent-foreground text-center uppercase tracking-widest">
          {t('trustedUs')}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5">
          <TrustedUsItem icon={Slack} companyName="Slack INC" />
          <TrustedUsItem icon={PartyPopper} companyName="Party" />
          <TrustedUsItem icon={Slack} companyName="Slack INC" />
          <TrustedUsItem icon={PartyPopper} companyName="Party" />
          <TrustedUsItem icon={Slack} companyName="Slack INC" />
        </div>
      </Container>
    </section>
  );
};
