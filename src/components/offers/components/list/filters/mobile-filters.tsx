import { Filter } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { AgreementTypeMobileFilters } from './agreement-type-mobile-filters/agreement-type-mobile-filters';
import { IndustryFilters } from './industry-filters/industry-filters';

// TODO: CREATE MOBILE FILTERS FORM
// TODO: DYNAMIC IMPORT FOR FILTERS

export const MobileFilters = () => {
  const t = useTranslations('offers.filters');
  return (
    <Dialog>
      <DialogTrigger>
        <Filter />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('headlineFilters')}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="space-y-5">
            <AgreementTypeMobileFilters />
            <IndustryFilters />
          </div>
        </DialogDescription>
        <DialogFooter className="flex-row justify-end gap-2.5">
          <Button>{t('saveFilters')}</Button>
          <Button variant="destructive">{t('clearFilters')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
