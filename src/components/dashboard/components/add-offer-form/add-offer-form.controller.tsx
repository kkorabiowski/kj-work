'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAddOfferMutation } from '@/hooks/mutations/use-add-offer-mutation';

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  company: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  industry: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  location: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  agreement_type: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  expiration_date: z.string().min(1, {
    message: 'Pole wymagane',
  }),
  duties: z.string().array().optional(),
  requirements: z.string().array().optional(),
  offer: z.string().array().optional(),
  summary: z.string().optional(),
});

export type AddOfferSchemaType = z.infer<typeof formSchema>;

export const useAddOfferForm = () => {
  const { mutate, isPending } = useAddOfferMutation();
  const router = useRouter();

  const form = useForm<AddOfferSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      company: '',
      industry: '',
      location: '',
      agreement_type: '',
      expiration_date: '',
      duties: [''],
      offer: [''],
      requirements: [''],
      summary: '',
    },
  });

  function onSubmit(values: AddOfferSchemaType) {
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

  const fields = [
    'title',
    'company',
    'industry',
    'expiration_date',
    'agreement_type',
    'location',
  ] as const;

  return { form, fields, isPending, onSubmit };
};
