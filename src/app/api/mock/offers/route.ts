import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

import mockedOffers from '@/data/offers.json';

export async function GET() {
  await prisma.offer.deleteMany({});
  await prisma.offer.createMany({ data: mockedOffers });

  return NextResponse.json({
    message: 'Success!',
  });
}
