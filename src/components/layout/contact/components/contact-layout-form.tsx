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
        {!form.formState.isSubmitSuccessful ? (
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

              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-56"
                >
                  {t('send')}
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-5">
            <h3 className="text-center">
              Dziękujemy za wypełnienia fomrularza kontaktowego
            </h3>
            <h5 className="text-center">
              Nasz zespół wkrótce skontaktuje się z Tobą
            </h5>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
