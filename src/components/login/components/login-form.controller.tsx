'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useLoginMutation } from '@/hooks/mutations/use-login-mutation';

export const useLoginForm = () => {
  const { mutate, isPending } = useLoginMutation();
  const router = useRouter();

  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Pole wymagane',
    }),
    password: z.string().min(1, {
      message: 'Pole wymagane',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: 'hj2023',
      password: 'hj2023!123',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onError: () => {
        console.log('error!');
        form.reset();
      },
      onSuccess: () => {
        console.log('Success!');
        router.push('/dashboard');
      },
    });
  }

  const fields = ['username', 'password'] as const;

  return { form, onSubmit, fields, isPending };
};
