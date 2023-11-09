import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useApplyMutation } from '@/hooks/mutations/use-apply-mutation';

export const useApplyForm = (offerId: string) => {
  const t = useTranslations('offer');
  const { mutate, isPending, isSuccess } = useApplyMutation();
  const fields = ['name', 'email', 'phone'] as const;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Imię powinno zawierać przynajmniej 2 znaki',
    }),
    email: z.string().email({ message: 'Wpisz prawidłowy adres email' }),
    phone: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate({ ...values, offerId });
  }

  return { fields, form, t, isPending, isSuccess, onSubmit };
};
