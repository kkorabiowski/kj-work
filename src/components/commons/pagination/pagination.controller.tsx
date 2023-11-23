'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

import { useWindowWidth } from '@/hooks/use-window-width';

import { usePathname, useRouter } from '@/navigation';

type UsePaginationProps = {
  pageSize: number;
  totalCount: number;
  siblingCount?: number;
};

export const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const DOTS = '...';

export const usePagination = ({
  pageSize,
  siblingCount = 3,
  totalCount,
}: UsePaginationProps) => {
  const form = useFormContext();
  const width = useWindowWidth();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.get('page')) || 1;

  width > 768 ? siblingCount : (siblingCount = 1);

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  const handleChangePage = (page: number) => {
    form.setValue('page', page);
    replace(`${pathname}?${params.toString()}`);
    scrollTo({
      behavior: 'smooth',
      top: 200,
      left: 0,
    });
  };

  useEffect(() => {
    if (
      currentPage &&
      paginationRange &&
      currentPage > Number(paginationRange[paginationRange.length - 1])
    ) {
      form.setValue('page', paginationRange[paginationRange.length - 1]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSize]);

  const isVisible = paginationRange && paginationRange?.length > 0;
  const lastPage = Math.ceil(totalCount / pageSize);

  return {
    isVisible,
    paginationRange,
    currentPage,
    lastPage,
    handleChangePage,
  };
};
