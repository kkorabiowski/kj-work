import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

export const useDesktopFilters = () => {
  const t = useTranslations('offers');
  const form = useFormContext();

  const clearFilters = () => {
    form.reset();
  };

  return { form, t, clearFilters };
};
