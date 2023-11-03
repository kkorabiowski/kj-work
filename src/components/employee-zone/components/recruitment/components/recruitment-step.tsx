import { cn } from '@/lib/utils';

type Props = {
  step_number: number;
  headline: string;
  description: string;
};

export const RecruitmentStep = ({
  description,
  headline,
  step_number,
}: Props) => (
  <div
    className={cn('flex gap-10', step_number % 2 === 0 && 'flex-row-reverse')}
  >
    <div className="bg-accent w-36 h-36 flex items-center justify-center rounded-full">
      <h1 className="text-8xl text-accent-foreground">{step_number}.</h1>
    </div>
    <div className="w-3/4 space-y-2.5">
      <h2>{headline}</h2>
      <p>{description}</p>
    </div>
  </div>
);
