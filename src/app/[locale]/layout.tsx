import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/navigation';

const inter = Inter({ subsets: ['latin'] });

const locales = ['pl', 'de'];

export function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'de' }];
}

type Props = {
  children: React.ReactNode | React.ReactNode[];
  params: {
    locale: 'de' | 'pl';
  };
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  const isValidLocale = locales.some(cur => cur === locale);
  if (!isValidLocale) notFound();

  let messages;
  try {
    messages = (await import(`../../locales/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <main className="flex min-h-screen flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
