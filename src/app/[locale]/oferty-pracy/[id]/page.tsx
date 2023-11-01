import { Offer } from '@/components/offer/offer';

const tempOffer = {
  id: '1',
  title: 'Software Engineer',
  company: {
    name: 'TechCo',
    picture: 'techco.png',
  },
  agreement_type: 'Full-time',
  location: 'San Francisco',
  category: 'Information Technology',
  created_at: '2023-10-31',
  expiration_date: '2023-12-31',
};

const OfferPage = () => {
  return <Offer {...tempOffer} />;
};

export default OfferPage;
