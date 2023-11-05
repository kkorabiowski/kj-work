'use client';

import Link from 'next/link';

import { Icon } from '@/components/commons/icon/icon';
import { IconNameType } from '@/components/commons/icon/icon.model';
import { Button } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

export type LanguageItemType = {
  locale: string;
  label: string;
  iconName: IconNameType;
};

export const LanguageItem = ({ iconName, label, locale }: LanguageItemType) => {
  const handleClick = () => {
    console.log('click');
  };

  return (
    <DropdownMenuItem key={locale}>
      <Link href={`/${locale}`}>
        <Button
          variant="ghost"
          className="items-center gap-x-2.5"
          onClick={handleClick}
        >
          <Icon name={iconName} className="w-5" />
          <span className="text-sm uppercase">{label}</span>
        </Button>
      </Link>
    </DropdownMenuItem>
  );
};
