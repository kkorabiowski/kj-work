'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

import { Button } from '@/components/ui/button';

export const LogOutBtn = () => (
  <Button
    variant="ghost"
    size="icon"
    onClick={() => signOut({ redirect: true, callbackUrl: '/' })}
  >
    <LogOut />
  </Button>
);
