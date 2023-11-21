import { useFormContext } from 'react-hook-form';

import { getLabel, getPlaceholder } from '@/lib/helpers';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type Props = {
  fieldName:
    | 'title'
    | 'company'
    | 'industry'
    | 'expiration_date'
    | 'agreement_type'
    | 'location';
};

export const InputFormField = ({ fieldName }: Props) => {
  const form = useFormContext();

  return (
    <FormField
      key={fieldName}
      control={form.control}
      name={fieldName}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{getLabel(fieldName)}</FormLabel>
          <FormControl>
            <Input placeholder={getPlaceholder(fieldName)} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
