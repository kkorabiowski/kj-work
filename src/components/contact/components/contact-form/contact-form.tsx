'use client';
import { getLabel, getPlaceholder } from '@/lib/helpers';

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
  const { fields, form, onSubmit, t } = useContactForm();

  console.log(form.formState.errors);

  return (
    <Card>
      <CardHeader>
        <h2>{t('headline')}</h2>
        <h4>{t('subHeadline')}</h4>
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
}
