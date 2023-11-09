'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useAddOfferMutation } from '@/hooks/mutations/use-add-offer-mutation';

export const useAddOfferForm = () => {
  const { mutate, isPending } = useAddOfferMutation();
  const router = useRouter();

  const formSchema = z.object({
    title: z.string().min(2, {
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
    duties: z.string().optional(),
    requirements: z.string().optional(),
    offer: z.string().optional(),
    summary: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      company: '',
      industry: '',
      location: '',
      agreement_type: '',
      expiration_date: '',
      duties: '',
      requirements: '',
      offer: '',
      summary: '',
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

  const fields = [
    'title',
    'company',
    'industry',
    'expiration_date',
    'agreement_type',
    'location',
  ] as const;

  const textAreaFields = [
    'duties',
    'requirements',
    'offer',
    'summary',
  ] as const;

  return { form, onSubmit, fields, textAreaFields, isPending };
};
