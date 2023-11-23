import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

export const useMobileFilters = () => {
  const t = useTranslations('offers');
  const [open, setOpen] = useState(false);
  const form = useFormContext();

  const clearFilters = () => {
    form.reset();
  };

  const handleClick = () => {
    setOpen(false);
  };

  return { t, open, form, clearFilters, handleClick, setOpen };
};
