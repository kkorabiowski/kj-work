import { Inter as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/navigation';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
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
    <html lang={locale} className={fontSans.variable}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
