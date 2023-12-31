'use client';

import { Container } from '@/components/commons/container';

import { Link } from '@/navigation';

export default function GlobalErrorPage({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <html>
      <body>
        <Container className="h-full min-h-full">
          <div className="flex flex-col h-full min-h-full gap-10 justify-center items-center">
            <div>
              <h1>Wystąpił nieoczekiwany błąd</h1>
              <h3>
                Powrót na
                <Link href="/" className="text-secondary ml-2 font-bold">
                  stronę główną
                </Link>
              </h3>
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}
