import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations('metadata.employeeZone');

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

export default async function Layout({ children }: { children: JSX.Element }) {
  return children;
}
