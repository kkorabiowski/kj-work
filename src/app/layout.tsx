import { ReactNode } from 'react';

import './globals.css';

type Props = {
  children: ReactNode | ReactNode[];
};

export default function RootLayout({ children }: Props) {
  return children;
}
