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
    agreement_type: z.object({}),
    industry: z.object({}),
  }),
});

export type TOffersFormSchema = z.infer<typeof formSchema>;

export const useOffers = () => {
  const searchParams = useSearchParams();
  const width = useWindowWidth();
  const pathname = usePathname();
  const { replace } = useRouter();

  const {
    data: offers,
    isError,
    isPending,
    isRefetching,
    refetch,
  } = useOffersQuery(searchParams.toString());

  const form = useForm<TOffersFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      page: Number(searchParams.get('page')) || 1,
      query: searchParams.get('query') || '',
      orderBy: searchParams.get('orderBy') || 'newest',
      filters: {
        agreement_type: {
          'contract-of-employment': false,
          'mandate-contract': false,
          temporary: false,
        },
        industry: {
          construction: false,
          gastronomy: false,
          it: false,
          logistic: false,
          production: false,
          transport: false,
        },
      },
    },
  });

  const formValues = form.getValues();

  const onSubmit = (values: TOffersFormSchema) => {
    const params = new URLSearchParams(searchParams);

    if (values.page === 1) {
      params.delete('page');
    } else {
      params.set('page', String(values.page));
    }

    if (values.orderBy === 'newest') {
      params.delete('orderBy');
    } else {
      params.set('orderBy', 'oldest');
    }

    if (values.query === '') {
      params.delete('query');
    } else {
      params.set('query', values?.query || '');
    }

    replace(`${pathname}?${params.toString()}`);
    refetch();
  };

  useEffect(() => {
    onSubmit(form.getValues());
    // eslint-disable-next-line no-console
    console.log('refetch');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchParams,
    formValues.page,
    formValues.orderBy,
    formValues.query,
    formValues.filters.industry,
    formValues.filters.agreement_type,
  ]);

  return { form, width, offers, isPending, isRefetching, isError, onSubmit };
};
