'use client';

export default function GlobalErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // eslint-disable-next-line no-console
  console.log(error);
  return (
    <html>
      <body>
        <h1>Global error</h1>
      </body>
    </html>
  );
}
