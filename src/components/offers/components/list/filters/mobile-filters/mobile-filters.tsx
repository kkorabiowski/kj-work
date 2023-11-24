import { FilterIcon } from 'lucide-react';

import { filters } from '@/lib/constants';

import { SortSelect } from '@/components/commons/sort-select';
import { SubmitButton } from '@/components/commons/submit-button';
import { TOffersFormSchema } from '@/components/offers/offers.controller';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { MobileFiltersSection } from './components/mobile-filters-section';
import { useMobileFilters } from './mobile-filters.controller';

type Props = {
  isPending: boolean;
  onSubmit: (values: TOffersFormSchema) => void;
};

export const MobileFilters = ({ isPending, onSubmit }: Props) => {
  const { open, t, clearFilters, handleClick, setOpen } = useMobileFilters({
    onSubmit,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <FilterIcon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('filters.headlineFilters')}</DialogTitle>
        </DialogHeader>
        <div>
          <div className="space-y-5">
            <div className="mt-2.5">
              <SortSelect />
            </div>
            <MobileFiltersSection
              groupLabel={t('agreementType')}
              checkboxItems={filters[0].items}
              formKey="agreement_type"
            />
            <MobileFiltersSection
              groupLabel={t('industryType')}
              checkboxItems={filters[1].items}
              formKey="industry"
            />
          </div>
        </div>
        <DialogFooter className="flex-row justify-end gap-2.5">
          <SubmitButton isPending={isPending} onClick={handleClick}>
            {t('filters.saveFilters')}
          </SubmitButton>
          <Button variant="destructive" onClick={clearFilters}>
            {t('filters.clearFilters')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
