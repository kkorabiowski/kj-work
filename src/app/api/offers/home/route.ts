import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const offers = await prisma.offer.findMany({
    take: 3,
    orderBy: { created_at: 'asc' },
  });

  return NextResponse.json({
    count: offers.length,
    message: 'Success!',
    offers,
  });
}
