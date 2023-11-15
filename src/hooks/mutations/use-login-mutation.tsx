'use client';

import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';

type TCredentials = {
  username: string;
  password: string;
};

type Props = {
  credentials: TCredentials;
};

const login = async ({ credentials }: Props) => {
  await signIn('credentials', {
    ...credentials,
    callbackUrl: '/login',
    redirect: false,
  }).then(callback => {
    if (callback?.error) {
      throw new Error('Error creating review');
    }
    if (callback?.ok) {
      console.log('ok');
    }
  });
};

export const useLoginMutation = () =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: login,
  });
