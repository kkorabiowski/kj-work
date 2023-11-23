'use client';

import { useTranslations } from 'next-intl';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { useIndustryFilters } from './industry-filters.controller';

export const IndustryFilters = () => {
  const t = useTranslations('offers');
  const { form, items } = useIndustryFilters();

  return (
    <div className="space-y-4">
      <h6>{t('industryType')}</h6>
      <FormField
        control={form.control}
        name="items"
        render={() => (
          <FormItem>
            {items.map(item => (
              <FormField
                key={item.id}
                control={form.control}
                name="items"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.id}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value?.includes(item.id)}
                          onCheckedChange={checked => {
                            // return checked
                            //   ? field.onChange([...field.value, item.id])
                            //   : field.onChange(
                            //       field.value?.filter(
                            //         value => value !== item.id
                            //       )
                            //     );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="text-sm font-normal">
                        {item.label}
                      </FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
