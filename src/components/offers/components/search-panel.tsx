import { useTranslations } from 'next-intl';
import { UseFormReturn } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { TOffersFormSchema } from '../offers.controller';

type Props = {
  form: UseFormReturn<TOffersFormSchema>;
};

export const SearchPanel = ({ form }: Props) => {
  const t = useTranslations('offers.filters');
  return (
    <div className="mt-5">
      <div className="mx-auto bg-blue-100 shadow-md w-full max-w-4xl px-5 md:px-10 py-5 pb-10 space-y-2">
        <h4 className="text-primary">{t('searchByName')}</h4>
        <div className="flex flex-col md:flex-row gap-2.5 md:items-center">
          <div className="flex-1">
            <Input
              placeholder={t('typeName')}
              {...form.register('filters.query')}
            />
          </div>
          <Button
            variant="accent"
            size="lg"
            className="mx-auto w-40 md:w-auto rounded-none"
            type="submit"
          >
            {t('search')}
          </Button>
        </div>
      </div>
    </div>
  );
};
