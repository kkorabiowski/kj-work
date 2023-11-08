import { Raleway as FontSans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';

import { ContactSection } from '@/components/layout/contact/contact-section';
import { Footer } from '@/components/layout/footer/footer';
import { Navigation } from '@/components/layout/navigation/navigation';

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

export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);
  const t = createTranslator({ locale, messages });

  return {
    title: 'KJ WORK GROUP',
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
