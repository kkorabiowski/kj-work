'use client';
import { getLabel, getPlaceholder } from '@/lib/helpers';

import { Icons } from '@/components/commons/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useContactForm } from './contact-form.controller';

export function ContactForm() {
  const { fields, form, onSubmit, t, isSuccess, isPending } = useContactForm();

  return (
    <Card>
      <CardHeader>
        <h2>{t('headline')}</h2>
        <h4>{t('subHeadline')}</h4>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="pt-10 pb-20 space-y-5">
            <h2>Dziękujemy za wypełnienie formularza</h2>
            <h3>Nasz zespół się wkrótce do Ciebie odezwie!</h3>
          </div>
        ) : (
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
                        {fieldName !== 'message' ? (
                          <Input
                            placeholder={getPlaceholder(fieldName)}
                            {...field}
                          />
                        ) : (
                          <Textarea
                            placeholder={getPlaceholder(fieldName)}
                            className="h-48 resize-none"
                            {...field}
                          />
                        )}
                      </FormControl>
                      <FormMessage />
                      {fieldName === 'message' ? (
                        <FormDescription>{t('maxLength1000')}</FormDescription>
                      ) : null}
                    </FormItem>
                  )}
                />
              ))}
              <div>
                <p className="text-sm">* - {t('requiredFields')}</p>
              </div>
              <div className="flex justify-center">
                <Button
                  type="submit"
                  variant="accent"
                  disabled={isPending}
                  size="lg"
                  className="w-56"
                >
                  {isPending ? (
                    <Icons.spinner className="w-4 h-4 animate-spin" />
                  ) : null}{' '}
                  {t('send')}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
