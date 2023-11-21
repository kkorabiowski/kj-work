'use client';

import { agreement_types, exp_dates, industries } from '@/lib/constants';

import { SubmitButton } from '@/components/commons/submit-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';

import { useAddOfferForm } from './add-offer-form.controller';
import { ArrayField } from './components/array-field';
import { Description } from './components/description';
import { InputFormField } from './components/input-form-field';
import { SelectField } from './components/select-field';
import { Summary } from './components/summary';

export const AddOfferForm = () => {
  const { fields, form, isPending, onSubmit } = useAddOfferForm();

  return (
    <Card className="mx-auto w-full max-w-xl mt-5">
      <CardHeader>
        <CardTitle>Dodaj ofertę</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              {fields.map(fieldName => (
                <InputFormField key={fieldName} fieldName={fieldName} />
              ))}
              <SelectField fieldName="industry" items={industries} />
              <SelectField fieldName="agreement_type" items={agreement_types} />
              <SelectField fieldName="expiration_date" items={exp_dates} />
              <Description />
            </div>
            <ArrayField
              fieldName="requirements"
              label="Wymagania (maksymalnie 10)"
            />
            <ArrayField fieldName="duties" label="Obowiązki (maksymalnie 10)" />
            <ArrayField fieldName="offer" label="Oferta (maksymalnie 10)" />
            <Summary />
            <div className="mt-10 flex justify-center">
              <SubmitButton size="lg" variant="accent" isPending={isPending}>
                Dodaj ofertę
              </SubmitButton>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
