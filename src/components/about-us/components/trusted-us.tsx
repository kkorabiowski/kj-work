import { Building2 } from 'lucide-react';
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
          {[0, 1, 2, 3, 5].map(item => (
            <TrustedUsItem key={item} icon={Building2} companyName="Nazwa" />
          ))}
        </div>
      </Container>
    </section>
  );
};
