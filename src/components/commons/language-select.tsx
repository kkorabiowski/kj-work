'use client';

import { useLocale } from 'next-intl';

import { languages } from '@/lib/constants';

import { Icon } from '@/components/commons/icon/icon';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { LanguageItem } from './language-item';

export const LanguageSelect = () => {
  const locale = useLocale();
  const defaultLocale =
    languages.find(lang => lang.locale === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button data-test="language-select" variant="outline" size="icon">
          <Icon name={defaultLocale?.iconName} />
          <span className="sr-only">Language select</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-0" align="end">
        {languages.map(item => (
          <LanguageItem key={item.locale} {...item} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
