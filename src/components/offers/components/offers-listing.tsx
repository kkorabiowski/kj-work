import { OfferItem } from './offer-item';
const offers = [
  {
    id: '1',
    title: 'Software Engineer',
    company: {
      name: 'TechCo',
      picture: 'techco.png',
    },
    agreement_type: 'Full-time',
    location: 'San Francisco',
    category: 'Information Technology',
    created_at: new Date('2023-10-31'),
  },
  {
    id: '2',
    title: 'Graphic Designer',
    company: {
      name: 'DesignFirm',
      picture: 'designfirm.png',
    },
    agreement_type: 'Part-time',
    location: 'New York',
    category: 'Design',
    created_at: new Date('2023-10-30'),
  },
  {
    id: '3',
    title: 'Marketing Specialist',
    company: {
      name: 'MarketMasters',
      picture: 'marketmasters.png',
    },
    agreement_type: 'Contract',
    location: 'Los Angeles',
    created_at: new Date('2023-10-29'),
  },
  {
    id: '4',
    title: 'Accountant',
    company: {
      name: 'FinanceCorp',
      picture: 'financecorp.png',
    },
    agreement_type: 'Full-time',
    location: 'Chicago',
    category: 'Finance',
    created_at: new Date('2023-10-28'),
  },
];

export const OffersListing = () => (
  <div className="space-y-2.5">
    {offers.map(offer => (
      <OfferItem key={offer.id} {...offer} />
    ))}
  </div>
);
