import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useMobileFilters = () => {
  const [open, setOpen] = useState(false);
  const form = useFormContext();
  const t = useTranslations('offers');

  console.log(form.getValues());

  const handleClick = () => {
    form.handleSubmit(values => values);
    setOpen(false);
  };

  const clearFilters = () => {
    form.reset();
  };

  return { t, open, form, handleClick, clearFilters, setOpen };
};
