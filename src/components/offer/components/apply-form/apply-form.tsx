'use client';
import { getLabel, getPlaceholder } from '@/lib/helpers';

import { SubmitButton } from '@/components/commons/submit-button';
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

export const ApplyForm = ({ offerId }: { offerId: string }) => {
  const { fields, form, onSubmit, t, isSuccess, isPending } =
    useApplyForm(offerId);

  return (
    <Card>
      <CardHeader>
        <h2>{t('form.headline')}</h2>
        <p>{t('form.subHeadline')}</p>
      </CardHeader>
      <CardContent>
        {!isSuccess ? (
          <div className="space-y-5">
            <Form {...form}>
              <form
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
                  <SubmitButton
                    variant="accent"
                    isPending={isPending}
                    className="w-44 h-12"
                  >
                    {t('apply')}
                  </SubmitButton>
                </div>
              </form>
            </Form>
          </div>
        ) : (
          <div className="pt-10 pb-20 space-y-5">
            <h2>Dziękujemy</h2>
            <h3>Zgłoszenie zostało wysłane</h3>
            <h6>Zespół KJ-WORK</h6>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
