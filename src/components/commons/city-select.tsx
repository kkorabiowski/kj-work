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

export const CitySelect = ({ isMobile }: Props) => {
  const t = useTranslations('form');
  return (
    <div>
      <div className="flex gap-1.5 items-center">
        <Select>
          <SelectTrigger className={cn(isMobile && 'w-full')}>
            <SelectValue defaultValue="new" placeholder={t('chooseCity')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="hamburg">Hamburg</SelectItem>
              <SelectItem value="berlin">Berlin</SelectItem>
              <SelectItem value="munich">Munich</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
