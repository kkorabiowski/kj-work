'use client';

import { useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

import { getParamsObjectFromSearchParams } from '@/lib/utils';
import { useDebounce } from '@/hooks/use-debounce';

import { usePathname, useRouter } from '@/navigation';

export const useSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const query = searchParams.get('query') || '';
  const [searchQuery, setSearchQuery] = useState<string>(query);

  const debouncedValue = useDebounce<string>(searchQuery, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleQuery = (query: string) => {
    const paramsObj = getParamsObjectFromSearchParams(searchParams);
    const searchQuery: typeof paramsObj = { ...paramsObj, query };
    delete searchQuery.page;

    if (query === '') delete searchQuery.query;
  };

  useEffect(() => {
    handleQuery(searchQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, searchQuery]);
  return {
    query,
    searchQuery,
    handleChange,
    setSearchQuery,
  };
};
