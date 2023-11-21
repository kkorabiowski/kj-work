import { Button, ButtonProps } from '@/components/ui/button';

import { Icons } from './icons';

type Props = {
  isPending: boolean;
  children: React.ReactNode | React.ReactNode[];
} & ButtonProps;

export const SubmitButton = ({ isPending, children, ...props }: Props) => (
  <Button type="submit" disabled={isPending} {...props}>
    {isPending ? <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> : null}{' '}
    {children}
  </Button>
);
