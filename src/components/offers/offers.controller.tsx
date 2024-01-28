import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { createFilterParams, updateParam } from '@/lib/helpers';
import { useOffersQuery } from '@/hooks/queries/use-offers-query';
import { useWindowWidth } from '@/hooks/use-window-width';

import { usePathname, useRouter } from '@/navigation';
import { FiltersSchema } from '@/schemas';

export type TOffersFormSchema = z.infer<typeof FiltersSchema>;

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
    resolver: zodResolver(FiltersSchema),
    defaultValues: {
      page: Number(searchParams.get('page')) || 1,
      query: searchParams.get('query') || '',
      orderBy: searchParams.get('orderBy') || 'newest',
      filters: {
        agreement_type: {
          'contract-of-employment':
            searchParams.get('contract-of-employment') || false,
          'mandate-contract': searchParams.get('mandate-contract') || false,
          temporary: searchParams.get('temporary') || false,
        },
        industry: {
          construction: searchParams.get('construction') || false,
          gastronomy: searchParams.get('gastronomy') || false,
          it: searchParams.get('it') || false,
          logistic: searchParams.get('logistic') || false,
          production: searchParams.get('production') || false,
          transport: searchParams.get('transport') || false,
        },
      },
    },
  });

  const formValues = form.getValues();

  const onSubmit = (values: TOffersFormSchema) => {
    const params = new URLSearchParams(searchParams);

    updateParam(params, 'page', values.page, 1);
    updateParam(params, 'orderBy', values.orderBy, 'newest');
    updateParam(params, 'query', values.query);

    createFilterParams(params, formValues.filters.industry);
    createFilterParams(params, formValues.filters.agreement_type);

    replace(`${pathname}?${params.toString()}`);
    refetch();
  };

  useEffect(() => {
    onSubmit(form.getValues());

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
