import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    body.gender = 'femaile';

    const parsed = schema.safeParse(body);

    if (parsed.success) {
      return NextResponse.json({
        message: 'Success!',
      });
    }

    return NextResponse.json(
      {
        message: 'Success!',
      },
      {
        status: 401,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Success!',
      },
      {
        status: 401,
      }
    );
  }
}
