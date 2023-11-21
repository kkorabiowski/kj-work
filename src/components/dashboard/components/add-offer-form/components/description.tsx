import { useFormContext } from 'react-hook-form';

import { getLabel, getPlaceholder } from '@/lib/helpers';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

export const Description = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{getLabel('description')}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={getPlaceholder('description')}
              className="resize-none"
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
