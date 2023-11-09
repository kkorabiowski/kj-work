import { useMutation } from '@tanstack/react-query';

type TBody = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const sendQuestion = async (body: TBody) => {
  try {
    const response = await fetch('/api/contact-question', {
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

export const useContactQuestionMutation = () =>
  useMutation({
    mutationKey: ['contact-question'],
    mutationFn: sendQuestion,
  });
