import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { db } from '@/lib/prisma';

type TParams = {
  params: {
    offerId: string;
  };
};

export async function GET(request: NextRequest, { params }: TParams) {
  try {
    const offer = await db.offer.findUnique({
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
    return NextResponse.json(
      {
        message: 'Failed',
      },
      { status: 404 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: TParams) {
  try {
    const session = await getServerSession();
    const body = await request.json();

    if (!session) {
      throw new Error('Unauthorized');
    }

    const offer = await db.offer.update({
      data: body,
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

export async function DELETE(request: NextRequest, { params }: TParams) {
  try {
    const session = await getServerSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    const offer = await db.offer.delete({
      where: {
        id: params.offerId,
      },
    });

    return NextResponse.json({
      message: 'Success',
      offer,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed',
      },
      {
        status: 404,
      }
    );
  }
}
