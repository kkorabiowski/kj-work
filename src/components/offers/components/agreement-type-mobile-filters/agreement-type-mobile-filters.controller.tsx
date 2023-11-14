import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useAgreementTypeMobileFilters = () => {
  const items = [
    {
      id: 'contract-of-employment',
      label: 'Umowa o pracę',
    },
    {
      id: 'mandate-contract',
      label: 'Umowa zlecenie',
    },
    {
      id: 'temporary',
      label: 'Tymczasowa',
    },
  ] as const;

  const FormSchema = z.object({
    items: z.array(z.string()).refine(value => value.some(item => item), {
      message: 'You have to select at least one item.',
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return { items, form, onSubmit };
};
