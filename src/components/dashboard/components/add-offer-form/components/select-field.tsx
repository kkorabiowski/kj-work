'use client';

import { useFormContext } from 'react-hook-form';

import { getLabel, getPlaceholder } from '@/lib/helpers';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  fieldName: 'industry' | 'expiration_date' | 'agreement_type';
  items: {
    value: string;
    label: string;
  }[];
};

export const SelectField = ({ fieldName, items }: Props) => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{getLabel(fieldName)}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={getPlaceholder(fieldName)} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {items.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
