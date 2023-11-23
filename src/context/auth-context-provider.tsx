'use client';

import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export const AuthContextProvider = ({ children }: Props) => (
  <SessionProvider>{children}</SessionProvider>
);
