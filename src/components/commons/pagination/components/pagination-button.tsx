import { Button, ButtonProps } from '@/components/ui/button';

type Props = {
  children: React.ReactNode | React.ReactNode[];
} & ButtonProps;

export const PaginationButton = ({ children, ...props }: Props) => (
  <Button variant="accent" size="icon" type="button" {...props}>
    {children}
  </Button>
);
