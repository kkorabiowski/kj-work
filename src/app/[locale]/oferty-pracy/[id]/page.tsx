import { Offer } from '@/components/offer/offer';

const OfferPage = async ({ params }: { params: { id: string } }) => {
  return <Offer id={params.id} />;
};

export default OfferPage;
