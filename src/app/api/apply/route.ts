import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log(body);

  try {
    if (!body.offerId || !body.name || !body.email) {
      throw new Error('Missing data');
    }

    return NextResponse.json({
      message: 'Success!',
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: 'Failed!',
    });
  }
}
