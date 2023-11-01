'use client';
import { getLabel, getPlaceholder } from '@/lib/helpers';

import { Button } from '@/components/ui/button';
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
  const { fields, form, onSubmit } = useContactForm();

  return (
    <div>
      <h3>Wypełnij formularz, abyśmy mogli się z Tobą skontaktować</h3>
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
                        placeholder="Wpisz swoją wiadomość"
                        className="h-48 resize-none"
                        {...field}
                      />
                    )}
                  </FormControl>
                  {fieldName !== 'message' ? <FormMessage /> : null}
                  {fieldName === 'message' ? (
                    <FormDescription>
                      Wiadomość nie powinna przekraczać 1000 znaków
                    </FormDescription>
                  ) : null}
                </FormItem>
              )}
            />
          ))}
          <div className="flex justify-center">
            <Button type="submit" size="lg">
              Send
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
