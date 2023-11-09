import { ArrowUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('form.sort');
  return (
    <div>
      <div className="flex gap-1.5 items-center">
        {!isMobile ? (
          <ArrowUpDown className="text-muted-foreground w-5 h-5" />
        ) : null}
        <Select>
          <SelectTrigger className={cn('w-[180px]', isMobile && 'w-full')}>
            <SelectValue defaultValue="new" placeholder={t('sortBy')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="new">{t('newest')}</SelectItem>
              <SelectItem value="old">{t('oldest')}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
