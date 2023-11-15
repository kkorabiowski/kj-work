import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get('page')) - 1;
  const take = 10;

  const offers = await prisma.offer.findMany({
    take,
    skip: page * 10 || 0,
    orderBy: { created_at: 'asc' },
  });

  return NextResponse.json({
    count: offers.length,
    message: 'Success!',
    offers,
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  return NextResponse.json({
    message: 'Success!',
  });
}
