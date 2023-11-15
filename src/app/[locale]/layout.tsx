import { Raleway as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { ContactSection } from '@/components/layout/contact/contact-section';
import { Footer } from '@/components/layout/footer/footer';
import { Navigation } from '@/components/layout/navigation/navigation';
import { Toaster } from '@/components/ui/toaster';

import { QueryProvider } from '@/context/query-client-provider';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  params: {
    locale: 'de' | 'pl';
  };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export const fontSans = FontSans({
  subsets: ['latin-ext'],
  variable: '--font-sans',
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('metadata.home');

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: t('url'),
      siteName: t('websiteName'),
      images: [
        {
          url: t('image'),
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={fontSans.variable}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <QueryProvider>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <ContactSection />
            <Footer />
          </QueryProvider>
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
