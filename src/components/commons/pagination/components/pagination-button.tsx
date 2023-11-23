import { ArrowLeft, ArrowRight } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';

type Props = {
  isPrev?: boolean;
  isNext?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  pageNumber?: number | string;
  handleClick?: () => void;
} & ButtonProps;

export const PaginationButton = ({
  isPrev,
  isNext,
  isActive,
  isDisabled,
  pageNumber,
  handleClick,
  ...props
}: Props) => (
  <Button
    variant={isActive ? 'accent' : 'default'}
    size="icon"
    type="button"
    onClick={handleClick}
    {...props}
  >
    {isPrev ? <ArrowLeft size={16} /> : null}
    {isNext ? <ArrowRight size={16} /> : null}
    {pageNumber}
  </Button>
);
