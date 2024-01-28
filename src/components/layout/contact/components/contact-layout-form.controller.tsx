import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useContactLayoutFormMutation } from '@/hooks/mutations/use-contact-layout-mutation';

import { ContactLayoutSchema } from '@/schemas';

export const useContactLayoutForm = () => {
  const { mutate, isPending } = useContactLayoutFormMutation();
  const fields = ['name', 'email', 'phone'] as const;

  const form = useForm<z.infer<typeof ContactLayoutSchema>>({
    resolver: zodResolver(ContactLayoutSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  function onSubmit(values: z.infer<typeof ContactLayoutSchema>) {
    mutate(values);
  }

  return { fields, form, onSubmit, isPending };
};
