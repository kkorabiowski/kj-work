import { useMutation } from '@tanstack/react-query';

type TBody = {
  offerId: string;
  name: string;
  email: string;
  phone: string;
};

const apply = async (body: TBody) => {
  try {
    const response = await fetch('/api/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
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

export const useApplyMutation = () =>
  useMutation({
    mutationKey: ['apply'],
    mutationFn: apply,
  });
