import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useContactQuestionMutation } from '@/hooks/mutations/use-contact-question';

export const useContactForm = () => {
  const t = useTranslations('form.validation');
  const { mutate, isPending, isSuccess } = useContactQuestionMutation();

  const fields = ['name', 'email', 'phone', 'subject', 'message'] as const;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: t('min2Length'),
    }),
    email: z.string().email({ message: t('correctEmail') }),
    phone: z.string(),
    subject: z
      .string()
      .min(10, {
        message: t('min10Length'),
      })
      .max(255, { message: t('max255Length') }),
    message: z
      .string()
      .min(10, {
        message: t('min10Length'),
      })
      .max(1000, {
        message: t('max1000Length'),
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values);
  }

  return { fields, form, onSubmit, t, isSuccess, isPending };
};
