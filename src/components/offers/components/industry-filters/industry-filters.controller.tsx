import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export const useIndustryFilters = () => {
  const items = [
    { label: 'Budownictwo', id: 'construction' },
    { label: 'Transport', id: 'transport' },
    { label: 'Gastronomia', id: 'gastronomy' },
    { label: 'Logistyka', id: 'logistic' },
    { label: 'Produkcja', id: 'production' },
    { label: 'IT', id: 'it' },
  ] as const;

  const formSchema = z.object({
    items: z.array(z.string()).refine(value => value.some(item => item), {
      message: 'You have to select at least one item.',
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: ['recents', 'home'],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return { items, form, onSubmit };
};
