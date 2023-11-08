import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

type TParams = {
  params: {
    offerId: string;
  };
};

export async function GET(request: NextRequest, { params }: TParams) {
  try {
    const offer = await prisma.offer.findUnique({
      where: {
        id: params.offerId,
      },
    });

    if (!offer) {
      throw new Error('Not found');
    }

    return NextResponse.json({
      message: 'Success',
      offer,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Failed',
    });
  }
}
