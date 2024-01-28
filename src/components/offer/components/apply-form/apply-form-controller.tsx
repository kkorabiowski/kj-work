import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useApplyMutation } from '@/hooks/mutations/use-apply-mutation';

import { ApplyFormClientSchema } from '@/schemas';

export const useApplyForm = (offerId: string) => {
  const t = useTranslations('offer');
  const { mutate, isPending, isSuccess } = useApplyMutation();
  const fields = ['name', 'email', 'phone'] as const;

  const form = useForm<z.infer<typeof ApplyFormClientSchema>>({
    resolver: zodResolver(ApplyFormClientSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof ApplyFormClientSchema>) {
    mutate({ ...values, offerId });
  }

  return { fields, form, t, isPending, isSuccess, onSubmit };
};
