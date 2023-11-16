import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

import { applyEmailGenerator } from '@/lib/email-generator';

const schema = z.object({
  offerId: z.string(),
  offerName: z.string().optional(),
  email: z.string().email(),
  name: z.string(),
  phone: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!body || !parsed.success) {
      return NextResponse.json(
        { message: 'Fill all fields', success: false },
        { status: 400 }
      );
    }

    const { offerId, offerName, email, name, phone } = body;

    const emailData = {
      from: email,
      to: 'business@kjworkgroup.com',
      subject: 'Zaaplikowano do oferty',
      text: 'Użytkownik zaaplikował do oferty',
      html: applyEmailGenerator({ email, name, offerId, phone }),
    };

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'e09a411ba6935b',
        pass: 'd15ae8a281ea36',
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          console.log(error);
          reject(error);
        } else {
          console.log('Server is ready to take our messages');
          resolve(success);
        }
      });
    });

    await new Promise((resolve, reject) => {
      transporter.sendMail(emailData, (err, info) => {
        if (err) {
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  } catch (error) {
    return NextResponse.json(
      { message: error, success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({ message: 'Email sent', success: true });
}