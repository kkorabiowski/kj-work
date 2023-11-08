'use client';

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

import { useLoginForm } from './login-form.controller';

export function LoginForm() {
  const { fields, form, onSubmit, isPending } = useLoginForm();

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
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : null}{' '}
              Zaloguj się
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
