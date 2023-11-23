import { useFormContext } from 'react-hook-form';

export const useIndustryFilters = () => {
  const items = [
    { label: 'Budownictwo', id: 'construction' },
    { label: 'Transport', id: 'transport' },
    { label: 'Gastronomia', id: 'gastronomy' },
    { label: 'Logistyka', id: 'logistic' },
    { label: 'Produkcja', id: 'production' },
    { label: 'IT', id: 'it' },
  ] as const;

  const form = useFormContext();

  return { items, form };
};
