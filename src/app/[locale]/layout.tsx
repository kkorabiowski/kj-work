import { Raleway as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { ContactSection } from '@/components/layout/contact/contact-section';
import { Footer } from '@/components/layout/footer/footer';
import { Navigation } from '@/components/layout/navigation/navigation';

export const fontSans = FontSans({
  subsets: ['latin-ext'],
  variable: '--font-sans',
});
const locales = ['pl', 'de'];

export function generateStaticParams() {
  return [{ locale: 'pl' }, { locale: 'de' }];
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return {
    title: 'KJ WORK GROUP',
  };
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
          <ContactSection />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
