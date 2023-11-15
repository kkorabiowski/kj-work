import { useMutation } from '@tanstack/react-query';

type Props = {
  offerId: string;
};

const deleteOffer = async ({ offerId }: Props) => {
  try {
    const response = await fetch(`/api/offers/${offerId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
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

export const useDeleteOfferMutation = () =>
  useMutation({
    mutationKey: ['remove-offer'],
    mutationFn: deleteOffer,
  });
