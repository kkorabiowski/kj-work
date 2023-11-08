import Link from 'next/link';

import { Container } from '@/components/commons/container';
import { Button } from '@/components/ui/button';

import OffersTable from './components/offers-table';

export const Dashboard = () => {
  return (
    <Container>
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h2>Zarządzanie ofertami</h2>
          <Link href="/dashboard/dodaj-oferte">
            <Button>Dodaj ofertę</Button>
          </Link>
        </div>
        <OffersTable />
      </div>
    </Container>
  );
};
