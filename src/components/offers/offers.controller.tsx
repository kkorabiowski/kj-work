import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { useOffersQuery } from '@/hooks/queries/use-offers-query';
import { useWindowWidth } from '@/hooks/use-window-width';

import { usePathname, useRouter } from '@/navigation';

const formSchema = z.object({
  page: z.number().optional(),
  orderBy: z.string().optional(),
  query: z.string().optional(),
  filters: z.object({
    agreement_type: z.string().array().optional(),
    industry: z.string().array().optional(),
  }),
});

export type TOffersFormSchema = z.infer<typeof formSchema>;

export const useOffers = () => {
  const searchParams = useSearchParams();

  const {
    data: offers,
    isError,
    isPending,
    refetch,
  } = useOffersQuery(searchParams.toString());

  const width = useWindowWidth();
  const pathname = usePathname();
  const { replace } = useRouter();

  const form = useForm<TOffersFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      page: Number(searchParams.get('page')) || 1,
      query: searchParams.get('query') || '',
      orderBy: searchParams.get('orderBy') || 'newest',
      filters: {
        agreement_type: [],
        industry: [],
      },
    },
  });

  const onSubmit = (values: TOffersFormSchema) => {
    const params = new URLSearchParams(searchParams);

    const updateParam = (param: string, value: string) => {
      if (value === '') {
        params.delete(param);
      } else {
        params.set(param, value);
      }
    };

    updateParam('page', values.page === 1 ? '' : String(values.page));
    updateParam('orderBy', values.orderBy === 'asc' ? '' : 'desc');
    updateParam('query', values?.query || '');

    replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.getValues()]);

  return { form, width, offers, isPending, isError, onSubmit };
};
