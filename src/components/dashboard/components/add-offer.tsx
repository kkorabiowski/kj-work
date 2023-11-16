import { Container } from '@/components/commons/container';

import { AddOfferForm } from './add-offer-form/add-offer-form';

export const AddOffer = () => {
  return (
    <Container className="pt-10 pb-20">
      <div>
        <h2 className="text-center">Dodaj nową ofertę</h2>
        <AddOfferForm />
      </div>
    </Container>
  );
};
