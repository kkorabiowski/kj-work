'use client';

import { MoreHorizontal } from 'lucide-react';

import { useDeleteOfferMutation } from '@/hooks/mutations/use-delete-offer-mutation';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';

type Props = {
  offerId: string;
  refresh: () => void;
};

export const RowAction = ({ offerId, refresh }: Props) => {
  const { mutate } = useDeleteOfferMutation();
  const handleClick = () => {
    mutate(
      { offerId },
      {
        onSuccess: () => {
          console.log('success');
          refresh();
          toast({
            title: 'Usunięto ofertę',
            description: 'Oferta usunięta pomyślnie',
          });
        },
      }
    );
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edytuj</DropdownMenuItem>
        <DropdownMenuItem className="text-destructive" onClick={handleClick}>
          Usuń
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
