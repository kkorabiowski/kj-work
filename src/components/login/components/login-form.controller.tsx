'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useLoginMutation } from '@/hooks/mutations/use-login-mutation';

import { toast } from '@/components/ui/use-toast';

import { useRouter } from '@/navigation';
import { LoginSchema } from '@/schemas';

export const useLoginForm = () => {
  const router = useRouter();
  const { isPending, mutate } = useLoginMutation();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(credentials: z.infer<typeof LoginSchema>) {
    mutate(
      {
        credentials,
      },
      {
        onError: () => {
          toast({
            variant: 'destructive',
            title: 'Nieprawidłowe dane',
            description: 'Wpisz dane ponownie',
          });
          form.reset();
        },
        onSuccess: () => {
          toast({
            title: 'Zalogowano',
          });
          setTimeout(() => {
            router.push('/dashboard');
          }, 1000);
        },
      }
    );
  }

  const fields = ['username', 'password'] as const;

  return { form, onSubmit, fields, isPending };
};
