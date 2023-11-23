'use client';

import { useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

type TCheckboxItem = {
  label: string;
  value: string;
};

type Props = {
  groupLabel: string;
  checkboxItems: TCheckboxItem[];
  formKey: string;
};

export const MobileFiltersSection = ({
  groupLabel,
  checkboxItems,
  formKey,
}: Props) => {
  const form = useFormContext();

  return (
    <div className="space-y-4">
      <p className="text-base font-semibold">{groupLabel}</p>
      <FormField
        control={form.control}
        name={`filters.${formKey}`}
        render={() => (
          <FormItem>
            {checkboxItems.map(item => (
              <FormField
                key={item.value}
                control={form.control}
                name={`filters.${formKey}.${item.value}`}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={item.value}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
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
