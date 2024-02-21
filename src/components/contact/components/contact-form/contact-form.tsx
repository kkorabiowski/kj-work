'use client';
import { useTranslations } from 'next-intl';

import { getLabel, getPlaceholder } from '@/lib/helpers';

import { SubmitButton } from '@/components/commons/submit-button';
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
  const { fields, form, isSuccess, isPending, onSubmit } = useContactForm();
  const t = useTranslations('contact.form');

  return (
    <Card>
      <CardHeader>
        <h2>{t('headline')}</h2>
        <h4>{t('subHeadline')}</h4>
      </CardHeader>
      <CardContent>
        {isSuccess ? (
          <div className="pt-10 pb-20 space-y-5">
            <h2>{t('thankYouMsg')}</h2>
            <h3>{t('thankYouMsgDesc')}</h3>
          </div>
        ) : (
          <Form {...form}>
            <form
              data-test="contact-form"
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
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
                            data-test={field.name}
                            {...field}
                          />
                        ) : (
                          <Textarea
                            placeholder={getPlaceholder(fieldName)}
                            className="h-48 resize-none"
                            data-test={field.name}
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
                <SubmitButton
                  variant="accent"
                  size="lg"
                  className="w-56"
                  isPending={isPending}
                >
                  {t('send')}
                </SubmitButton>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
