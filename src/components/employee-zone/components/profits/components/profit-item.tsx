import { CheckCircle } from 'lucide-react';

type Props = {
  profit: string;
};

export const ProfitItem = ({ profit }: Props) => (
  <div className="flex gap-5 items-center">
    <CheckCircle />
    <p className="w-4/5 md:w-3/5">{profit}</p>
  </div>
);
