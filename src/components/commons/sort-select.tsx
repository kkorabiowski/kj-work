import { ArrowUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  isMobile?: boolean;
};

export const SortSelect = ({ isMobile }: Props) => {
  return (
    <div>
      <div className="flex gap-1.5 items-center">
        {!isMobile ? (
          <ArrowUpDown className="text-muted-foreground w-5 h-5" />
        ) : null}
        <Select>
          <SelectTrigger className={cn('w-[180px]', isMobile && 'w-full')}>
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
