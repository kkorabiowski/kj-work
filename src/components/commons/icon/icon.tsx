'use client';

import React from 'react';
import SVG from 'react-inlinesvg';

import { cn } from '@/lib/utils';

import { Skeleton } from '@/components/commons/skeleton';

import { IconProps } from './icon.model';

export const Icon = ({ name, className, ...delegated }: IconProps) => (
  <SVG
    {...{
      ...delegated,
      src: `/svg/${name}.svg`,
      className: cn('h-auto', className),
      loader: <Skeleton className="h-10 w-10 rounded-full" />,
    }}
  />
);
