import { ArrowUpDown } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const SortSelect = () => {
  return (
    <div>
      <div className="flex gap-1.5 items-center">
        <ArrowUpDown className="text-muted-foreground w-5 h-5" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue defaultValue="new" placeholder="Sortuj po:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="new">Od najnowszych</SelectItem>
              <SelectItem value="old">Od najstarszych</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
