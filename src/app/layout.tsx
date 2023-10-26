import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Footer } from '@/components/footer/footer';
import { Navigation } from '@/components/navigation/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Strona Główna | KJ WORK GROUP ',
  description: 'lorem ipsum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navigation />
        <main className="flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
