import { NextRequest, NextResponse } from 'next/server';

export const offers = [
  {
    id: '1',
    title: 'Software Engineer',
    company: {
      name: 'TechCo',
      picture: 'techco.png',
    },
    agreement_type: 'Full-time',
    location: 'Hamburg',
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
    location: 'Berlin',
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
    location: 'Nurnberg',
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
    location: 'Munich',
    category: 'Finance',
    created_at: new Date('2023-10-28'),
  },
];

export async function GET(request: NextRequest, response: NextResponse) {
  return Response.json({
    message: 'Success!',
    offers,
  });
}
