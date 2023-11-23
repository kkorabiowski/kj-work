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
  formKey: string;
};

export const FilterItem = ({ label, value, formKey }: Props) => {
  const form = useFormContext();

  return (
    <div>
      <FormField
        control={form.control}
        name={`filters.${formKey}.${value}`}
        render={({ field }) => (
          <FormItem className="flex items-center space-x-3">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <div className="leading-none">
              <FormLabel>{label}</FormLabel>
            </div>
          </FormItem>
        )}
      />
    </div>
  );
};
