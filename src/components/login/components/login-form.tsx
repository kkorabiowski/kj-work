'use client';

import { SubmitButton } from '@/components/commons/submit-button';
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

import { useLoginForm } from './login-form.controller';

export function LoginForm() {
  const { fields, form, isPending, onSubmit } = useLoginForm();

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle>Zaloguj się</CardTitle>
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
                    <FormLabel>
                      {fieldName === 'password' ? 'Hasło' : 'Nazwa użytkownika'}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type={fieldName === 'password' ? 'password' : 'text'}
                        placeholder={
                          fieldName === 'password'
                            ? 'Hasło'
                            : 'Nazwa użytkownika'
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <SubmitButton isPending={isPending}>Zaloguj się</SubmitButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
