import { useMutation } from '@tanstack/react-query';

type TAddOffer = {
  title: string;
  company: string;
  industry: string;
  location: string;
  agreement_type: string;
};

const addOffer = async (offerValues: TAddOffer) => {
  try {
    const response = await fetch('/api/offers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(offerValues),
    });

    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

export const useAddOfferMutation = () =>
  useMutation({
    mutationKey: ['add-offer'],
    mutationFn: addOffer,
  });
