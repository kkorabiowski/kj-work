import { Filter } from 'lucide-react';

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
import { Input } from '@/components/ui/input';

import { AgreementTypeMobileFilters } from './agreement-type-mobile-filters';
import { IndustryFilters } from './industry-filters';

// TODO: CREATE MOBILE FILTERS FORM
// TODO: DYNAMIC IMPORT FOR FILTERS

export const MobileFilters = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Filter />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Filtruj wyniki wyszukiwania</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <div className="space-y-5">
            <Input placeholder="Wyszukaj po nazwie stanowiska" />
            <AgreementTypeMobileFilters />
            <IndustryFilters />
          </div>
        </DialogDescription>
        <DialogFooter className="flex-row justify-end gap-2.5">
          <Button>Zapisz filtry</Button>
          <Button variant="destructive">Wyczyść filtry</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
