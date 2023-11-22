import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { SubmitButton } from '@/components/commons/submit-button';
import { Input } from '@/components/ui/input';

type Props = {
  isPending: boolean;
};

export const SearchPanel = ({ isPending }: Props) => {
  const t = useTranslations('offers.filters');
  const form = useFormContext();

  return (
    <div className="mt-5">
      <div className="mx-auto bg-blue-100 shadow-md w-full max-w-4xl px-5 md:px-10 py-5 pb-10 space-y-2">
        <h4 className="text-primary">{t('searchByName')}</h4>
        <div className="flex flex-col md:flex-row gap-2.5 md:items-center">
          <div className="flex-1">
            <Input placeholder={t('typeName')} {...form.register('query')} />
          </div>
          <SubmitButton
            isPending={isPending}
            size="lg"
            className="mx-auto w-40 md:w-auto rounded-none"
            type="submit"
          >
            {t('search')}
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};
