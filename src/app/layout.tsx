import { ReactNode } from 'react';

import './globals.css';

import { AuthContextProvider } from '@/context/auth-context-provider';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function RootLayout({ children }: Props) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
