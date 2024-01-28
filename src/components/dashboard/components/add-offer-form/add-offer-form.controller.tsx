'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAddOfferMutation } from '@/hooks/mutations/use-add-offer-mutation';

import { toast } from '@/components/ui/use-toast';

import { CreateOfferSchema } from '@/schemas';

export type AddOfferSchemaType = z.infer<typeof CreateOfferSchema>;

export const useAddOfferForm = () => {
  const { mutate, isPending } = useAddOfferMutation();
  const router = useRouter();

  const form = useForm<AddOfferSchemaType>({
    resolver: zodResolver(CreateOfferSchema),
    defaultValues: {
      title: '',
      description: '',
      company: '',
      location: '',
      industry: undefined,
      agreement_type: undefined,
      summary: '',
    },
  });

  const onSubmit = (values: AddOfferSchemaType) => {
    mutate(values, {
      onError: () => {
        toast({
          variant: 'destructive',
          title: 'Nieprawidłowe dane',
          description: 'Sprawdź, czy dane w formularzu są prawidłowe',
        });
      },
      onSuccess: () => {
        toast({
          title: 'Oferta została dodana',
        });
        router.push('/dashboard');
        form.reset();
      },
    });
  };

  const fields = ['title', 'company', 'location'] as const;

  return { form, fields, isPending, onSubmit };
};
