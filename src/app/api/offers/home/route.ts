import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET() {
  const offers = await prisma.offer.findMany({
    take: 3,
    orderBy: { created_at: 'desc' },
  });

  return NextResponse.json({
    count: offers.length,
    message: 'Success!',
    offers,
  });
}
