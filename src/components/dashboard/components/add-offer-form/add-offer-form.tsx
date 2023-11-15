'use client';

import { getLabel, getPlaceholder } from '@/lib/helpers';

import { Icons } from '@/components/commons/icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { useAddOfferForm } from './add-offer-form.controller';

export const AddOfferForm = () => {
  const { fields, form, onSubmit, isPending, textAreaFields } =
    useAddOfferForm();

  return (
    <Card className="mx-auto w-full max-w-lg mt-5">
      <CardHeader>
        <CardTitle>Dodaj ofertę</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            {textAreaFields.map(fieldName => (
              <FormField
                key={fieldName}
                control={form.control}
                name={fieldName}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{getLabel(fieldName)}</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder={getPlaceholder(fieldName)}
                        className="resize-none"
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
                size="lg"
                variant="accent"
                disabled={isPending}
              >
                {isPending ? (
                  <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                ) : null}{' '}
                Dodaj ofertę
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
