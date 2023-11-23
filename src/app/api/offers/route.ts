import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { z } from 'zod';

import prisma from '@/lib/prisma';

const schema = z.object({
  title: z.string(),
  company: z.string(),
  agreement_type: z.enum([
    'contract-of-employment',
    'mandate-contract',
    'temporary',
  ]),
  location: z.string(),
  industry: z.enum([
    'construction',
    'transport',
    'gastronomy',
    'logistic',
    'production',
    'it',
  ]),
  description: z.string(),
  duties: z.string().array(),
  requirements: z.string().array(),
  offer: z.string().array(),
  summary: z.string(),
});

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get('page')) || 1;
    const orderBy = searchParams.get('orderBy') || 'newest';
    const query = searchParams.get('query') || undefined;
    const take = 10;

    const totalCountOffers = await prisma.offer.findMany({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    const offers = await prisma.offer.findMany({
      take,
      skip: page === 1 ? undefined : (page - 1) * take,
      orderBy: {
        created_at: orderBy === 'newest' ? 'desc' : 'asc',
      },
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
      },
    });

    return NextResponse.json({
      count: totalCountOffers.length,
      message: 'Success!',
      offers,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Failed!',
      },
      {
        status: 400,
      }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();

    if (!session) {
      throw new Error('Unauthorized');
    }

    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!body || !parsed.success) {
      return NextResponse.json(
        { message: 'Fill all fields', success: false },
        { status: 400 }
      );
    }

    const offer = await prisma.offer.create({
      data: { ...body, company: { name: body.company } },
    });

    return NextResponse.json({
      message: 'Success!',
      offer,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    return NextResponse.json(
      {
        message: 'Failed!',
      },
      { status: 400 }
    );
  }
}
