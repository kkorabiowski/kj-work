import { ProfitItem } from './profit-item';

type Props = {
  label: string;
  profits: string[];
};

export const ProfitList = ({ label, profits }: Props) => (
  <div className="flex-1">
    <h2>{label}</h2>
    <div className="py-5 space-y-5">
      {profits.map((profit, index) => (
        <ProfitItem key={index} profit={profit} />
      ))}
    </div>
  </div>
);
