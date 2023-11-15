import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  filters: z.object({
    page: z.number(),
    orderBy: z.enum(['asc', 'desc']),
    search: z.string(),
  }),
});

export type TOffersFormSchema = z.infer<typeof formSchema>;

export const useOffers = () => {
  const form = useForm<TOffersFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filters: {
        page: 1,
        orderBy: 'asc',
        search: '',
      },
    },
  });

  const onSubmit = (values: TOffersFormSchema) => {
    console.log(values);
    console.log('submit');
  };

  return { form, onSubmit };
};
