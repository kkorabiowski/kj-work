import { Container } from '@/components/commons/container';
import { Button } from '@/components/ui/button';

import { Link } from '@/navigation';

import { OffersTable } from './components/offers-table/offers-table';

export const Dashboard = () => (
  <Container>
    <div className="mt-10">
      <div className="flex items-center justify-between">
        <h2>Zarządzanie ofertami</h2>
        <Link href="/dashboard/dodaj-oferte">
          <Button>Dodaj ofertę</Button>
        </Link>
      </div>
      <div className="pt-10 pb-20">
        <OffersTable />
      </div>
    </div>
  </Container>
);
