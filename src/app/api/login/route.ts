import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const request = await req.json();

  if (!request.username || !request.password) {
    return NextResponse.json(
      {
        message: 'Failed. Invalid credentials',
      },
      {
        status: 401,
      }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      username: request.username,
    },
  });

  if (!user || user.password !== request.password) {
    return NextResponse.json(
      {
        message: 'Failed. Invalid credentials',
      },
      {
        status: 401,
      }
    );
  }

  return NextResponse.json({
    message: 'Success!',
  });
}
