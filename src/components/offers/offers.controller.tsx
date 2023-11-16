import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { usePathname, useRouter } from '@/navigation';

const formSchema = z.object({
  filters: z.object({
    page: z.number(),
    orderBy: z.enum(['asc', 'desc']),
    query: z.string(),
  }),
});

export type TOffersFormSchema = z.infer<typeof formSchema>;

export const useOffers = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const form = useForm<TOffersFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      filters: {
        page: Number(searchParams.get('page')) || 1,
        orderBy: searchParams.get('orderBy') || 'asc',
        query: searchParams.get('query') || '',
      },
    },
  });

  const onSubmit = (values: TOffersFormSchema) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', String(values.filters.page));
    params.set('orderBy', values.filters.orderBy);
    params.set('query', values.filters.query);

    console.log(Object.fromEntries(values.filters));

    replace(`${pathname}?${params.toString()}`);
  };

  return { form, onSubmit };
};
