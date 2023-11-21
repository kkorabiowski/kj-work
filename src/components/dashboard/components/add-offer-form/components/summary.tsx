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

export const Summary = () => {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name="summary"
      render={({ field }) => (
        <FormItem>
          <FormLabel>{getLabel('summary')}</FormLabel>
          <FormControl>
            <Textarea
              placeholder={getPlaceholder('summary')}
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
