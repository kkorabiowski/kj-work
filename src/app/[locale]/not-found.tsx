'use client';

import { useTranslations } from 'next-intl';

import { Container } from '@/components/commons/container';

import { Link } from '@/navigation';

export default function NotFound() {
  const t = useTranslations('error');
  return (
    <Container className="h-full min-h-full">
      <div className="flex h-full min-h-full gap-10 justify-center items-center">
        <h1 className="text-9xl text-primary">404</h1>
        <div>
          <h2>{t('message')}</h2>
          <p>
            {t('back')}
            <Link href="/" className="text-secondary ml-2 font-bold">
              {t('home')}
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
