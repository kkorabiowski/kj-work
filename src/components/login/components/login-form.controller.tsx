'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useLoginMutation } from '@/hooks/mutations/use-login-mutation';

import { toast } from '@/components/ui/use-toast';

import { useRouter } from '@/navigation';

export const useLoginForm = () => {
  const router = useRouter();
  const { mutate, isPending } = useLoginMutation();

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

  function onSubmit(credentials: z.infer<typeof formSchema>) {
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
