import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { emailGenerator } from '@/lib/mail';

import { ContactSchema } from '@/schemas';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);

    if (!body || !parsed.success) {
      return NextResponse.json(
        { message: 'Fill all fields', success: false },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    const emailData = {
      from: email,
      to: 'business@kjworkgroup.com',
      subject: 'Formularz kontaktowy',
      text: 'Prośba o kontakt',
      html: emailGenerator({ email, name, subject, message }),
    };

    const transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    await new Promise((resolve, reject) => {
      transporter.verify(function (error, success) {
        if (error) {
          // eslint-disable-next-line no-console
          console.log(error);
          reject(error);
        } else {
          // eslint-disable-next-line no-console
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
          // eslint-disable-next-line no-console
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
