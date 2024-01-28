import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

import { db } from '@/lib/prisma';

import { CreateOfferSchema } from '@/schemas';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const page = Number(searchParams.get('page')) || 1;
    const orderBy = searchParams.get('orderBy') || 'newest';
    const query = searchParams.get('query') || undefined;
    const take = 10;

    // filters

    const construction = searchParams.get('construction') || '';
    const gastronomy = searchParams.get('gastronomy') || '';
    const logistic = searchParams.get('logistic') || '';
    const production = searchParams.get('production') || '';
    const transport = searchParams.get('transport') || '';
    const it = searchParams.get('it') || '';

    const contractOfEmployment =
      searchParams.get('contract-of-employment') || '';
    const mandateContract = searchParams.get('mandate-contract') || '';
    const temporary = searchParams.get('temporary') || '';

    const industriesFilters: string[] = [
      construction ? 'construction' : '',
      gastronomy ? 'gastronomy' : '',
      logistic ? 'logistic' : '',
      production ? 'production' : '',
      transport ? 'transport' : '',
      it ? 'it' : '',
    ].filter(item => item !== '');

    const agreementsFilters: string[] = [
      contractOfEmployment ? 'contract-of-employment' : '',
      mandateContract ? 'mandate-contract' : '',
      temporary ? 'temporary' : '',
    ].filter(item => item !== '');

    const totalCount = await db.offer.count({
      where: {
        title: {
          contains: query,
          mode: 'insensitive',
        },
        industry: {
          in: industriesFilters.length === 0 ? undefined : industriesFilters,
        },
        agreement_type: {
          in: agreementsFilters.length === 0 ? undefined : agreementsFilters,
        },
      },
    });

    const offers = await db.offer.findMany({
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
        industry: {
          in: industriesFilters.length === 0 ? undefined : industriesFilters,
        },
        agreement_type: {
          in: agreementsFilters.length === 0 ? undefined : agreementsFilters,
        },
      },
    });

    return NextResponse.json({
      count: totalCount,
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
    const parsed = CreateOfferSchema.safeParse(body);

    if (!body || !parsed.success) {
      return NextResponse.json(
        { message: 'Fill all fields', success: false },
        { status: 400 }
      );
    }

    const offer = await db.offer.create({
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
