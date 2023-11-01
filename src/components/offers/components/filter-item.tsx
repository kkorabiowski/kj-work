import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type Props = {
  label: string;
  value: string;
};

export const FilterItem = ({ label, value }: Props) => (
  <div className="flex items-center space-x-2">
    <Checkbox id={value} />
    <Label htmlFor={value} className="text-base">
      {label}
    </Label>
  </div>
);
