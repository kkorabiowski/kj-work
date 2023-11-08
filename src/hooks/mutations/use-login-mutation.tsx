import { useMutation } from '@tanstack/react-query';

type TCredentials = {
  username: string;
  password: string;
};

const login = async (credentials: TCredentials) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
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

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });
