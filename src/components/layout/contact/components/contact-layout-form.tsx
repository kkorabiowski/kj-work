'use client';
import { getPlaceholder } from '@/lib/helpers';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useContactLayoutForm } from './contact-layout-form.controller';

export const ContactLayoutForm = () => {
  const { fields, form, onSubmit, t } = useContactLayoutForm();

  return (
    <Card>
      <CardHeader>
        <h2 className="text-center">Formularz kontaktowy</h2>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {fields.map(fieldName => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                  <FormItem>
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
            <div>
              <p className="text-sm">* - pola wymagane</p>
            </div>
            <div className="flex justify-center">
              <Button type="submit" variant="accent" size="lg" className="w-56">
                {t('send')}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
