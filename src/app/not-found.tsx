'use client';

import Link from 'next/link';

import { Container } from '@/components/container';

export default function NotFound() {
  return (
    <Container className="h-full min-h-full">
      <div className="flex h-full min-h-full gap-10 justify-center items-center">
        <h1 className="text-9xl text-primary">404</h1>
        <div>
          <h2>Strona o podanym adresie nie istnieje</h2>
          <p>
            Powrót na
            <Link href="/" className="text-secondary ml-2 font-bold">
              stronę główną
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}
