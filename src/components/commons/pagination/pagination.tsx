import { PaginationButton } from './components/pagination-button';
import { usePagination } from './pagination.controller';

export type PaginationProps = {
  current: number;
  total: number;
  pageSize?: number;
};

export const Pagination = ({ current, total, pageSize }: PaginationProps) => {
  const { isVisible, paginationRange, lastPage, handleChangePage } =
    usePagination({
      pageSize: pageSize || 10,
      totalCount: total,
    });

  return (
    <div className="pagination mx-auto flex w-auto max-w-lg justify-center gap-2.5 py-5">
      {isVisible && current > 1 && (
        <PaginationButton
          isPrev
          handleClick={() => handleChangePage(current - 1)}
        />
      )}
      {paginationRange && paginationRange?.length > 1
        ? paginationRange?.map((pageNumber: number | string, index: number) => (
            <PaginationButton
              key={index}
              {...{
                pageNumber: pageNumber,
                isDisabled: pageNumber === '...',
                isActive: pageNumber === current,
                handleClick: () => {
                  typeof pageNumber === 'number'
                    ? handleChangePage(pageNumber)
                    : null;
                },
              }}
            />
          ))
        : null}
      {isVisible && current !== lastPage && (
        <PaginationButton
          isNext
          handleClick={() => handleChangePage(current + 1)}
        />
      )}
    </div>
  );
};
