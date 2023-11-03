'use client';
import { getLabel, getPlaceholder } from '@/lib/helpers';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useApplyForm } from './apply-form-controller';

export const ApplyForm = () => {
  const { fields, form, onSubmit, t } = useApplyForm();

  return (
    <Card>
      <CardHeader>
        <h2>{t('form.headline')}</h2>
        <p>{t('form.subHeadline')}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {fields.map(fieldName => (
                <FormField
                  key={fieldName}
                  control={form.control}
                  name={fieldName}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{getLabel(fieldName)}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={getPlaceholder(fieldName)}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex justify-center">
                <Button type="submit" variant="accent" className="w-44 h-12">
                  {t('apply')}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};
