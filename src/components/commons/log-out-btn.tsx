'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const LogOutBtn = () => {
  const handleClick = () => {
    signOut();
  };

  return (
    <Button variant="ghost" size="icon" onClick={handleClick}>
      <LogOut />
    </Button>
  );
};
