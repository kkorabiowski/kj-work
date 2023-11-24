import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { TOffersFormSchema } from '@/components/offers/offers.controller';

type Props = {
  onSubmit: (values: TOffersFormSchema) => void;
};

export const useMobileFilters = ({ onSubmit }: Props) => {
  const [open, setOpen] = useState(false);
  const form = useFormContext();
  const t = useTranslations('offers');

  const formValues = form.getValues();

  const handleClick = () => {
    onSubmit(formValues as TOffersFormSchema);
    setOpen(false);
  };

  const clearFilters = () => {
    form.reset();
  };

  return { t, open, form, handleClick, clearFilters, setOpen };
};
