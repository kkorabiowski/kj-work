import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
};

export const Container = ({ children, className }: Props) => (
  <div className={cn('container px-4 md:px-5', className)}>{children}</div>
);
