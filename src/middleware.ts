import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['pl', 'de'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
