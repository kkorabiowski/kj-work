import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET() {
  const offers = await prisma.offer.findMany({
    orderBy: { created_at: 'asc' },
  });

  return NextResponse.json({
    message: 'Success!',
    offers,
  });
}

export async function POST(req: NextRequest) {
  const requestBody = await req.json();

  return NextResponse.json({
    message: 'Success!',
  });
}
