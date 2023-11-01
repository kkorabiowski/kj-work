import { Container } from '@/components/container';
import { Offers } from '@/components/offers/offers';

const OffersPage = () => {
  return (
    <Container className="mt-10">
      <div className="bg-text-muted">
        <h1 className="text-primary text-center">
          Znajdź odpowiednią ofertę <span>dla siebie</span>
        </h1>
        <p className="text-muted-foreground text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          odit.
        </p>
      </div>
      <Offers />
    </Container>
  );
};

export default OffersPage;
