'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';
import { Icon } from '@/components/commons/icon/icon';

import { ContactLayoutForm } from './components/contact-layout-form';

export const ContactSection = () => {
  const pathname = usePathname();
  const t = useTranslations('contact');

  if (
    ['/kontakt', '/dashboard', '/dashboard/dodaj-oferte'].includes(pathname)
  ) {
    return null;
  }

  return (
    <div className="py-10 md:py-20 bg-slate-200">
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-2.5">
            <h1 className="text-center">{t('questions')}</h1>
            <h2 className="text-center">{t('formInfo')}</h2>
            <div className="flex justify-center items-center pt-10">
              <Icon name="envelope" className="w-24 md:w-44" />
            </div>
          </div>
          <ContactLayoutForm />
        </section>
      </Container>
    </div>
  );
};
