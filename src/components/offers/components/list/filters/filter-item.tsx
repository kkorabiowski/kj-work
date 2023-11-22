'use client';
import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';

type Props = {
  label: string;
  value: string;
};

export const FilterItem = ({ label, value }: Props) => {
  const form = useFormContext();

  return (
    <div className="flex items-center space-x-2">
      <FormField
        control={form.control}
        name={`filters.industry.${value}`}
        render={({ field }) => (
          <FormItem className="flex flex-row items-center space-x-3 space-y-2">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="space-y-1 leading-none">
              <FormLabel>{label}</FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};
