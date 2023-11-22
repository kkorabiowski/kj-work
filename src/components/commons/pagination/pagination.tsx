import { ArrowLeft, ArrowRight } from 'lucide-react';

import { PaginationButton } from './components/pagination-button';

export const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-5 gap-2.5">
      <PaginationButton>
        <ArrowLeft />
      </PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>
        <ArrowRight />
      </PaginationButton>
    </div>
  );
};
