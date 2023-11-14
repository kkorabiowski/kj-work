import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

type Props = {
  offerId: string;
};

export const Breadcrumbs = ({ offerId }: Props) => {
  const t = useTranslations('breadcrumbs');
  return (
    <ol
      className="flex items-center whitespace-nowrap min-w-0"
      aria-label="Breadcrumb"
    >
      <li className="text-sm">
        <Link
          className="flex items-center text-gray-500 hover:text-primary"
          href="/"
        >
          {t('home')}
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </li>
      <li className="text-sm">
        <Link
          className="flex items-center text-gray-500 hover:text-primary"
          href="/oferty-pracy"
        >
          {t('offers')}
          <svg
            className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </li>
      <li
        className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
        aria-current="page"
      >
        Oferta #{offerId}
      </li>
    </ol>
  );
};
