'use client';

import { Icon } from '@/components/commons/icon/icon';
import { IconNameType } from '@/components/commons/icon/icon.model';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

import { Button } from '../ui/button';

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
      <Button
        variant="ghost"
        className="items-center gap-x-2.5"
        onClick={handleClick}
      >
        <Icon name={iconName} className="w-5" />
        <span className="text-sm uppercase">{label}</span>
      </Button>
    </DropdownMenuItem>
  );
};
