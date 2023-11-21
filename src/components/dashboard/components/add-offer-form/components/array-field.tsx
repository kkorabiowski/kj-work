'use client';
import { X } from 'lucide-react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = {
  fieldName: 'requirements' | 'duties' | 'offers';
  label: string;
};

export const ArrayField = ({ fieldName, label }: Props) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: fieldName,
    rules: { minLength: 1, maxLength: 10 },
  });

  return (
    <div className="py-2.5">
      <p className="font-bold">{label}</p>
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2.5 py-2.5">
          <div className="flex items-center gap-5">
            <p>{index + 1}</p>
            <Input
              key={field.id}
              placeholder="Wypełnij to pole"
              {...register(`${fieldName}.${index}`)}
            />
            <Button size="icon" variant="ghost" onClick={() => remove(index)}>
              <X size={16} />
            </Button>
          </div>
        </div>
      ))}
      <Button
        type="button"
        className="justify-end mt-2.5"
        onClick={() => append('')}
      >
        Dodaj kolejne
      </Button>
    </div>
  );
};
