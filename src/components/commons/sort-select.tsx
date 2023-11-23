import { ArrowUpDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/lib/utils';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FormField, FormItem } from '../ui/form';

type Props = {
  isMobile?: boolean;
};

export const SortSelect = ({ isMobile }: Props) => {
  const t = useTranslations('form.sort');
  const form = useFormContext();

  return (
    <div>
      <div className="flex gap-1.5 items-center">
        {!isMobile ? (
          <ArrowUpDown className="text-muted-foreground w-5 h-5" />
        ) : null}
        <FormField
          control={form.control}
          name="orderBy"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger
                  className={cn('w-[180px]', isMobile && 'w-full')}
                >
                  <SelectValue
                    defaultValue={field.value}
                    placeholder={t('sortBy')}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="newest">{t('newest')}</SelectItem>
                    <SelectItem value="oldest">{t('oldest')}</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};
