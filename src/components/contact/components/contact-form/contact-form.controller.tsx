import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useContactQuestionMutation } from '@/hooks/mutations/use-contact-question';

export const useContactForm = () => {
  const t = useTranslations('contact.form');
  const { mutate, isPending, isSuccess } = useContactQuestionMutation();

  const fields = ['name', 'email', 'phone', 'subject', 'message'] as const;

  const formSchema = z.object({
    name: z.string().min(2, {
      message: 'Imię powinno zawierać przynajmniej 2 znaki',
    }),
    email: z.string().email({ message: 'Wpisz prawidłowy adres email' }),
    phone: z.string(),
    subject: z
      .string()
      .min(10, {
        message: 'Minimum 10 znaków',
      })
      .max(255, { message: 'Maksymalnie 255 znaków' }),
    message: z
      .string()
      .min(10, {
        message: 'Minimum 10 znaków',
      })
      .max(1000, {
        message: 'Maksymalnie 1000 znaków',
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
